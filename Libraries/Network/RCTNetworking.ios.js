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

const NativeEventEmitter = require('../EventEmitter/NativeEventEmitter');

const convertRequestBody = require('./convertRequestBody');

import NativeNetworkingIOS from './NativeNetworkingIOS';
                                                         
                                                      

class RCTNetworking extends NativeEventEmitter {
  constructor() {
    super(NativeNetworkingIOS);
  }

  sendRequest(
    method        ,
    trackingName        ,
    url        ,
    headers        ,
    data             ,
    responseType                    ,
    incrementalUpdates         ,
    timeout        ,
    callback                             ,
    withCredentials         ,
  ) {
    const body = convertRequestBody(data);
    NativeNetworkingIOS.sendRequest(
      {
        method,
        url,
        data: {...body, trackingName},
        headers,
        responseType,
        incrementalUpdates,
        timeout,
        withCredentials,
      },
      callback,
    );
  }

  abortRequest(requestId        ) {
    NativeNetworkingIOS.abortRequest(requestId);
  }

  clearCookies(callback                           ) {
    NativeNetworkingIOS.clearCookies(callback);
  }
}

module.exports = (new RCTNetworking()               );
