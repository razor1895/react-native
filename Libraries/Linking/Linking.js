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

const InteractionManager = require('../Interaction/InteractionManager');
const NativeEventEmitter = require('../EventEmitter/NativeEventEmitter');
const Platform = require('../Utilities/Platform');

const invariant = require('invariant');

import NativeLinking from './NativeLinking';

/**
 * `Linking` gives you a general interface to interact with both incoming
 * and outgoing app links.
 *
 * See https://reactnative.dev/docs/linking.html
 */
class Linking extends NativeEventEmitter {
  constructor() {
    super(NativeLinking);
  }

  /**
   * Add a handler to Linking changes by listening to the `url` event type
   * and providing the handler
   *
   * See https://reactnative.dev/docs/linking.html#addeventlistener
   */
  addEventListener(type        , handler          ) {
    this.addListener(type, handler);
  }

  /**
   * Remove a handler by passing the `url` event type and the handler.
   *
   * See https://reactnative.dev/docs/linking.html#removeeventlistener
   */
  removeEventListener(type        , handler          ) {
    this.removeListener(type, handler);
  }

  /**
   * Try to open the given `url` with any of the installed apps.
   *
   * See https://reactnative.dev/docs/linking.html#openurl
   */
  openURL(url        )               {
    this._validateURL(url);
    return NativeLinking.openURL(url);
  }

  /**
   * Determine whether or not an installed app can handle a given URL.
   *
   * See https://reactnative.dev/docs/linking.html#canopenurl
   */
  canOpenURL(url        )                   {
    this._validateURL(url);
    return NativeLinking.canOpenURL(url);
  }

  /**
   * Open app settings.
   *
   * See https://reactnative.dev/docs/linking.html#opensettings
   */
  openSettings()               {
    return NativeLinking.openSettings();
  }

  /**
   * If the app launch was triggered by an app link,
   * it will give the link url, otherwise it will give `null`
   *
   * See https://reactnative.dev/docs/linking.html#getinitialurl
   */
  getInitialURL()                   {
    return Platform.OS === 'android'
      ? InteractionManager.runAfterInteractions().then(() =>
          NativeLinking.getInitialURL(),
        )
      : NativeLinking.getInitialURL();
  }

  /*
   * Launch an Android intent with extras (optional)
   *
   * @platform android
   *
   * See https://reactnative.dev/docs/linking.html#sendintent
   */
  sendIntent(
    action        ,
    extras          
                  
                                       
         
      ,
  )                {
    if (Platform.OS === 'android') {
      return NativeLinking.sendIntent(action, extras);
    }
    return new Promise((resolve, reject) => reject(new Error('Unsupported')));
  }

  _validateURL(url        ) {
    invariant(
      typeof url === 'string',
      'Invalid URL: should be a string. Was: ' + url,
    );
    invariant(url, 'Invalid URL: cannot be empty');
  }
}

module.exports = (new Linking()         );
