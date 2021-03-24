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

const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

                                                                         
                                                     

const ScrollContentViewViewConfig = {
  uiViewClassName: 'RCTScrollContentView',
  bubblingEventTypes: {},
  directEventTypes: {},
  validAttributes: {},
};

let ScrollContentViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig(
    'RCTScrollContentView',
    ScrollContentViewViewConfig,
  );
  ScrollContentViewNativeComponent = 'RCTScrollContentView';
} else {
  ScrollContentViewNativeComponent = requireNativeComponent           (
    'RCTScrollContentView',
  );
}

export default ((ScrollContentViewNativeComponent     )                          );
