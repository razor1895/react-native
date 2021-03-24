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

const warning = require('fbjs/lib/warning');

const ToastAndroid = {
  show: function(message        , duration        )       {
    warning(false, 'ToastAndroid is not supported on this platform.');
  },

  showWithGravity: function(
    message        ,
    duration        ,
    gravity        ,
  )       {
    warning(false, 'ToastAndroid is not supported on this platform.');
  },

  showWithGravityAndOffset: function(
    message        ,
    duration        ,
    gravity        ,
    xOffset        ,
    yOffset        ,
  )       {
    warning(false, 'ToastAndroid is not supported on this platform.');
  },
};

module.exports = ToastAndroid;
