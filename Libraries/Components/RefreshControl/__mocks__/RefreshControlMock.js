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

const React = require('react');

const requireNativeComponent = require('../../../ReactNative/requireNativeComponent');

                                                                            

const RCTRefreshControl                       = requireNativeComponent       (
  'RCTRefreshControl',
);

class RefreshControlMock extends React.Component        {
  static latestRef                     ;
  componentDidMount() {
    RefreshControlMock.latestRef = this;
  }
  render()                                          {
    return <RCTRefreshControl />;
  }
}

module.exports = RefreshControlMock;
