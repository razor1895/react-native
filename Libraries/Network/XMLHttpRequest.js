/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *      
 */

'use strict';

const BlobManager = require('../Blob/BlobManager');
const EventTarget = require('event-target-shim');
const GlobalPerformanceLogger = require('react-native/Libraries/Utilities/GlobalPerformanceLogger');
const RCTNetworking = require('./RCTNetworking');

const base64 = require('base64-js');
const invariant = require('invariant');
const warning = require('fbjs/lib/warning');

const DEBUG_NETWORK_SEND_DELAY        = false; // Set to a number of milliseconds when debugging

                                                            
                          
      
                 
          
              
          
           
                                        

                       
                                                                              
                   
               
                
                   
                    
          
                                               
                                                               
                                                 
     
  

// The native blob module is optional so inject it here if available.
if (BlobManager.isAvailable) {
  BlobManager.addNetworkingHandler();
}

const UNSENT = 0;
const OPENED = 1;
const HEADERS_RECEIVED = 2;
const LOADING = 3;
const DONE = 4;

const SUPPORTED_RESPONSE_TYPES = {
  arraybuffer: typeof global.ArrayBuffer === 'function',
  blob: typeof global.Blob === 'function',
  document: false,
  json: true,
  text: true,
  '': true,
};

const REQUEST_EVENTS = [
  'abort',
  'error',
  'load',
  'loadstart',
  'progress',
  'timeout',
  'loadend',
];

const XHR_EVENTS = REQUEST_EVENTS.concat('readystatechange');

class XMLHttpRequestEventTarget extends (EventTarget(...REQUEST_EVENTS)     ) {
  onload           ;
  onloadstart           ;
  onprogress           ;
  ontimeout           ;
  onerror           ;
  onabort           ;
  onloadend           ;
}

/**
 * Shared base for platform-specific XMLHttpRequest implementations.
 */
class XMLHttpRequest extends (EventTarget(...XHR_EVENTS)     ) {
  static UNSENT         = UNSENT;
  static OPENED         = OPENED;
  static HEADERS_RECEIVED         = HEADERS_RECEIVED;
  static LOADING         = LOADING;
  static DONE         = DONE;

  static _interceptor                  = null;

  UNSENT         = UNSENT;
  OPENED         = OPENED;
  HEADERS_RECEIVED         = HEADERS_RECEIVED;
  LOADING         = LOADING;
  DONE         = DONE;

  // EventTarget automatically initializes these to `null`.
  onload           ;
  onloadstart           ;
  onprogress           ;
  ontimeout           ;
  onerror           ;
  onabort           ;
  onloadend           ;
  onreadystatechange           ;

  readyState         = UNSENT;
  responseHeaders         ;
  status         = 0;
  timeout         = 0;
  responseURL         ;
  withCredentials          = true;

  upload                            = new XMLHttpRequestEventTarget();

  _requestId         ;
  _subscriptions          ;

  _aborted          = false;
  _cachedResponse          ;
  _hasError          = false;
  _headers        ;
  _lowerCaseResponseHeaders        ;
  _method          = null;
  _perfKey          = null;
  _response                  ;
  _responseType              ;
  _response         = '';
  _sent         ;
  _url          = null;
  _timedOut          = false;
  _trackingName         = 'unknown';
  _incrementalEvents          = false;

  static setInterceptor(interceptor                 ) {
    XMLHttpRequest._interceptor = interceptor;
  }

  constructor() {
    super();
    this._reset();
  }

  _reset()       {
    this.readyState = this.UNSENT;
    this.responseHeaders = undefined;
    this.status = 0;
    delete this.responseURL;

    this._requestId = null;

    this._cachedResponse = undefined;
    this._hasError = false;
    this._headers = {};
    this._response = '';
    this._responseType = '';
    this._sent = false;
    this._lowerCaseResponseHeaders = {};

    this._clearSubscriptions();
    this._timedOut = false;
  }

  get responseType()               {
    return this._responseType;
  }

  set responseType(responseType              )       {
    if (this._sent) {
      throw new Error(
        "Failed to set the 'responseType' property on 'XMLHttpRequest': The " +
          'response type cannot be set after the request has been sent.',
      );
    }
    if (!SUPPORTED_RESPONSE_TYPES.hasOwnProperty(responseType)) {
      warning(
        false,
        `The provided value '${responseType}' is not a valid 'responseType'.`,
      );
      return;
    }

    // redboxes early, e.g. for 'arraybuffer' on ios 7
    invariant(
      SUPPORTED_RESPONSE_TYPES[responseType] || responseType === 'document',
      `The provided value '${responseType}' is unsupported in this environment.`,
    );

    if (responseType === 'blob') {
      invariant(
        BlobManager.isAvailable,
        'Native module BlobModule is required for blob support',
      );
    }
    this._responseType = responseType;
  }

  get responseText()         {
    if (this._responseType !== '' && this._responseType !== 'text') {
      throw new Error(
        "The 'responseText' property is only available if 'responseType' " +
          `is set to '' or 'text', but it is '${this._responseType}'.`,
      );
    }
    if (this.readyState < LOADING) {
      return '';
    }
    return this._response;
  }

  get response()           {
    const {responseType} = this;
    if (responseType === '' || responseType === 'text') {
      return this.readyState < LOADING || this._hasError ? '' : this._response;
    }

    if (this.readyState !== DONE) {
      return null;
    }

    if (this._cachedResponse !== undefined) {
      return this._cachedResponse;
    }

    switch (responseType) {
      case 'document':
        this._cachedResponse = null;
        break;

      case 'arraybuffer':
        this._cachedResponse = base64.toByteArray(this._response).buffer;
        break;

      case 'blob':
        if (typeof this._response === 'object' && this._response) {
          this._cachedResponse = BlobManager.createFromOptions(this._response);
        } else if (this._response === '') {
          this._cachedResponse = BlobManager.createFromParts([]);
        } else {
          throw new Error(`Invalid response for blob: ${this._response}`);
        }
        break;

      case 'json':
        try {
          this._cachedResponse = JSON.parse(this._response);
        } catch (_) {
          this._cachedResponse = null;
        }
        break;

      default:
        this._cachedResponse = null;
    }

    return this._cachedResponse;
  }

  // exposed for testing
  __didCreateRequest(requestId        )       {
    this._requestId = requestId;

    XMLHttpRequest._interceptor &&
      XMLHttpRequest._interceptor.requestSent(
        requestId,
        this._url || '',
        this._method || 'GET',
        this._headers,
      );
  }

  // exposed for testing
  __didUploadProgress(
    requestId        ,
    progress        ,
    total        ,
  )       {
    if (requestId === this._requestId) {
      this.upload.dispatchEvent({
        type: 'progress',
        lengthComputable: true,
        loaded: progress,
        total,
      });
    }
  }

  __didReceiveResponse(
    requestId        ,
    status        ,
    responseHeaders         ,
    responseURL         ,
  )       {
    if (requestId === this._requestId) {
      this._perfKey != null &&
        GlobalPerformanceLogger.stopTimespan(this._perfKey);
      this.status = status;
      this.setResponseHeaders(responseHeaders);
      this.setReadyState(this.HEADERS_RECEIVED);
      if (responseURL || responseURL === '') {
        this.responseURL = responseURL;
      } else {
        delete this.responseURL;
      }

      XMLHttpRequest._interceptor &&
        XMLHttpRequest._interceptor.responseReceived(
          requestId,
          responseURL || this._url || '',
          status,
          responseHeaders || {},
        );
    }
  }

  __didReceiveData(requestId        , response        )       {
    if (requestId !== this._requestId) {
      return;
    }
    this._response = response;
    this._cachedResponse = undefined; // force lazy recomputation
    this.setReadyState(this.LOADING);

    XMLHttpRequest._interceptor &&
      XMLHttpRequest._interceptor.dataReceived(requestId, response);
  }

  __didReceiveIncrementalData(
    requestId        ,
    responseText        ,
    progress        ,
    total        ,
  ) {
    if (requestId !== this._requestId) {
      return;
    }
    if (!this._response) {
      this._response = responseText;
    } else {
      this._response += responseText;
    }

    XMLHttpRequest._interceptor &&
      XMLHttpRequest._interceptor.dataReceived(requestId, responseText);

    this.setReadyState(this.LOADING);
    this.__didReceiveDataProgress(requestId, progress, total);
  }

  __didReceiveDataProgress(
    requestId        ,
    loaded        ,
    total        ,
  )       {
    if (requestId !== this._requestId) {
      return;
    }
    this.dispatchEvent({
      type: 'progress',
      lengthComputable: total >= 0,
      loaded,
      total,
    });
  }

  // exposed for testing
  __didCompleteResponse(
    requestId        ,
    error        ,
    timeOutError         ,
  )       {
    if (requestId === this._requestId) {
      if (error) {
        if (this._responseType === '' || this._responseType === 'text') {
          this._response = error;
        }
        this._hasError = true;
        if (timeOutError) {
          this._timedOut = true;
        }
      }
      this._clearSubscriptions();
      this._requestId = null;
      this.setReadyState(this.DONE);

      if (error) {
        XMLHttpRequest._interceptor &&
          XMLHttpRequest._interceptor.loadingFailed(requestId, error);
      } else {
        XMLHttpRequest._interceptor &&
          XMLHttpRequest._interceptor.loadingFinished(
            requestId,
            this._response.length,
          );
      }
    }
  }

  _clearSubscriptions()       {
    (this._subscriptions || []).forEach(sub => {
      if (sub) {
        sub.remove();
      }
    });
    this._subscriptions = [];
  }

  getAllResponseHeaders()          {
    if (!this.responseHeaders) {
      // according to the spec, return null if no response has been received
      return null;
    }
    const headers = this.responseHeaders || {};
    return Object.keys(headers)
      .map(headerName => {
        return headerName + ': ' + headers[headerName];
      })
      .join('\r\n');
  }

  getResponseHeader(header        )          {
    const value = this._lowerCaseResponseHeaders[header.toLowerCase()];
    return value !== undefined ? value : null;
  }

  setRequestHeader(header        , value     )       {
    if (this.readyState !== this.OPENED) {
      throw new Error('Request has not been opened');
    }
    this._headers[header.toLowerCase()] = String(value);
  }

  /**
   * Custom extension for tracking origins of request.
   */
  setTrackingName(trackingName        )                 {
    this._trackingName = trackingName;
    return this;
  }

  open(method        , url        , async          )       {
    /* Other optional arguments are not supported yet */
    if (this.readyState !== this.UNSENT) {
      throw new Error('Cannot open, already sending');
    }
    if (async !== undefined && !async) {
      // async is default
      throw new Error('Synchronous http requests are not supported');
    }
    if (!url) {
      throw new Error('Cannot load an empty url');
    }
    this._method = method.toUpperCase();
    this._url = url;
    this._aborted = false;
    this.setReadyState(this.OPENED);
  }

  send(data     )       {
    if (this.readyState !== this.OPENED) {
      throw new Error('Request has not been opened');
    }
    if (this._sent) {
      throw new Error('Request has already been sent');
    }
    this._sent = true;
    const incrementalEvents =
      this._incrementalEvents || !!this.onreadystatechange || !!this.onprogress;

    this._subscriptions.push(
      RCTNetworking.addListener('didSendNetworkData', args =>
        this.__didUploadProgress(...args),
      ),
    );
    this._subscriptions.push(
      RCTNetworking.addListener('didReceiveNetworkResponse', args =>
        this.__didReceiveResponse(...args),
      ),
    );
    this._subscriptions.push(
      RCTNetworking.addListener('didReceiveNetworkData', args =>
        this.__didReceiveData(...args),
      ),
    );
    this._subscriptions.push(
      RCTNetworking.addListener('didReceiveNetworkIncrementalData', args =>
        this.__didReceiveIncrementalData(...args),
      ),
    );
    this._subscriptions.push(
      RCTNetworking.addListener('didReceiveNetworkDataProgress', args =>
        this.__didReceiveDataProgress(...args),
      ),
    );
    this._subscriptions.push(
      RCTNetworking.addListener('didCompleteNetworkResponse', args =>
        this.__didCompleteResponse(...args),
      ),
    );

    let nativeResponseType                     = 'text';
    if (this._responseType === 'arraybuffer') {
      nativeResponseType = 'base64';
    }
    if (this._responseType === 'blob') {
      nativeResponseType = 'blob';
    }

    const doSend = () => {
      const friendlyName =
        this._trackingName !== 'unknown' ? this._trackingName : this._url;
      this._perfKey = 'network_XMLHttpRequest_' + String(friendlyName);
      GlobalPerformanceLogger.startTimespan(this._perfKey);
      invariant(
        this._method,
        'XMLHttpRequest method needs to be defined (%s).',
        friendlyName,
      );
      invariant(
        this._url,
        'XMLHttpRequest URL needs to be defined (%s).',
        friendlyName,
      );
      RCTNetworking.sendRequest(
        this._method,
        this._trackingName,
        this._url,
        this._headers,
        data,
        /* $FlowFixMe(>=0.78.0 site=react_native_android_fb) This issue was found
         * when making Flow check .android.js files. */
        nativeResponseType,
        incrementalEvents,
        this.timeout,
        this.__didCreateRequest.bind(this),
        this.withCredentials,
      );
    };
    if (DEBUG_NETWORK_SEND_DELAY) {
      setTimeout(doSend, DEBUG_NETWORK_SEND_DELAY);
    } else {
      doSend();
    }
  }

  abort()       {
    this._aborted = true;
    if (this._requestId) {
      RCTNetworking.abortRequest(this._requestId);
    }
    // only call onreadystatechange if there is something to abort,
    // below logic is per spec
    if (
      !(
        this.readyState === this.UNSENT ||
        (this.readyState === this.OPENED && !this._sent) ||
        this.readyState === this.DONE
      )
    ) {
      this._reset();
      this.setReadyState(this.DONE);
    }
    // Reset again after, in case modified in handler
    this._reset();
  }

  setResponseHeaders(responseHeaders         )       {
    this.responseHeaders = responseHeaders || null;
    const headers = responseHeaders || {};
    this._lowerCaseResponseHeaders = Object.keys(headers).reduce(
      (lcaseHeaders, headerName) => {
        lcaseHeaders[headerName.toLowerCase()] = headers[headerName];
        return lcaseHeaders;
      },
      {},
    );
  }

  setReadyState(newState        )       {
    this.readyState = newState;
    this.dispatchEvent({type: 'readystatechange'});
    if (newState === this.DONE) {
      if (this._aborted) {
        this.dispatchEvent({type: 'abort'});
      } else if (this._hasError) {
        if (this._timedOut) {
          this.dispatchEvent({type: 'timeout'});
        } else {
          this.dispatchEvent({type: 'error'});
        }
      } else {
        this.dispatchEvent({type: 'load'});
      }
      this.dispatchEvent({type: 'loadend'});
    }
  }

  /* global EventListener */
  addEventListener(type        , listener               )       {
    // If we dont' have a 'readystatechange' event handler, we don't
    // have to send repeated LOADING events with incremental updates
    // to responseText, which will avoid a bunch of native -> JS
    // bridge traffic.
    if (type === 'readystatechange' || type === 'progress') {
      this._incrementalEvents = true;
    }
    super.addEventListener(type, listener);
  }
}

module.exports = XMLHttpRequest;
