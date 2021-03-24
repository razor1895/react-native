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
import ScrollViewViewConfig from './ScrollViewViewConfig';

             
                        
                                
                                         

let ScrollViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig('RCTScrollView', ScrollViewViewConfig);
  ScrollViewNativeComponent = 'RCTScrollView';
} else {
  ScrollViewNativeComponent = requireNativeComponent                       (
    'RCTScrollView',
  );
}

export default ((ScrollViewNativeComponent     )                               );
