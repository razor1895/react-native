/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *       strict-local
 * @format
 */

'use strict';

import NativeI18nManager from './NativeI18nManager';

const i18nConstants    
                                   
                 
   = NativeI18nManager
  ? NativeI18nManager.getConstants()
  : {
      isRTL: false,
      doLeftAndRightSwapInRTL: true,
    };

module.exports = {
  getConstants: ()                                                       => {
    return i18nConstants;
  },

  allowRTL: (shouldAllow         ) => {
    if (!NativeI18nManager) {
      return;
    }

    NativeI18nManager.allowRTL(shouldAllow);
  },

  forceRTL: (shouldForce         ) => {
    if (!NativeI18nManager) {
      return;
    }

    NativeI18nManager.forceRTL(shouldForce);
  },

  swapLeftAndRightInRTL: (flipStyles         ) => {
    if (!NativeI18nManager) {
      return;
    }

    NativeI18nManager.swapLeftAndRightInRTL(flipStyles);
  },

  isRTL: i18nConstants.isRTL,
  doLeftAndRightSwapInRTL: i18nConstants.doLeftAndRightSwapInRTL,
};
