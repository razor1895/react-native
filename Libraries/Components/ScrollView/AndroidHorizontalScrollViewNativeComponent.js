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

                                                                         
                                                                           

const AndroidHorizontalScrollViewViewConfig = {
  uiViewClassName: 'AndroidHorizontalScrollView',
  bubblingEventTypes: {},
  directEventTypes: {},
  validAttributes: {
    decelerationRate: true,
    disableIntervalMomentum: true,
    endFillColor: {process: require('../../StyleSheet/processColor')},
    fadingEdgeLength: true,
    nestedScrollEnabled: true,
    overScrollMode: true,
    pagingEnabled: true,
    persistentScrollbar: true,
    scrollEnabled: true,
    scrollPerfTag: true,
    sendMomentumEvents: true,
    showsHorizontalScrollIndicator: true,
    snapToEnd: true,
    snapToInterval: true,
    snapToStart: true,
    snapToOffsets: true,
  },
};

let AndroidHorizontalScrollViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig(
    'AndroidHorizontalScrollView',
    AndroidHorizontalScrollViewViewConfig,
  );
  AndroidHorizontalScrollViewNativeComponent = 'AndroidHorizontalScrollView';
} else {
  AndroidHorizontalScrollViewNativeComponent = requireNativeComponent                       (
    'AndroidHorizontalScrollView',
  );
}

export default ((AndroidHorizontalScrollViewNativeComponent     )                                      );
