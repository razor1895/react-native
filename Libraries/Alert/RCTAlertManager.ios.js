/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *       strict-local
 */

'use strict';

import NativeAlertManager from './NativeAlertManager';
                                               

module.exports = {
  alertWithArgs(
    args      ,
    callback                                     ,
  )       {
    if (NativeAlertManager == null) {
      return;
    }
    NativeAlertManager.alertWithArgs(args, callback);
  },
};
