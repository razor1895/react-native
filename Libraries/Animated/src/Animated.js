/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 * @format
 */

'use strict';

import Platform from '../../Utilities/Platform';
const View = require('../../Components/View/View');
const React = require('react');
                                                                     

const AnimatedMock = require('./AnimatedMock');
const AnimatedImplementation = require('./AnimatedImplementation');

//TODO(T57411659): Remove the bridgeless check when Animated perf regressions are fixed.
const Animated = ((Platform.isTesting || global.RN$Bridgeless
  ? AnimatedMock
  : AnimatedImplementation)                     );

module.exports = {
  get FlatList()      {
    return require('./components/AnimatedFlatList');
  },
  get Image()      {
    return require('./components/AnimatedImage');
  },
  get ScrollView()      {
    return require('./components/AnimatedScrollView');
  },
  get SectionList()      {
    return require('./components/AnimatedSectionList');
  },
  get Text()      {
    return require('./components/AnimatedText');
  },
  get View()                        
                                     
                                  
    {
    return require('./components/AnimatedView');
  },
  ...Animated,
};
