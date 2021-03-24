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

const AppContainer = require('./AppContainer');
import GlobalPerformanceLogger from '../Utilities/GlobalPerformanceLogger';
                                                                             
import PerformanceLoggerContext from '../Utilities/PerformanceLoggerContext';
const React = require('react');

const invariant = require('invariant');

// require BackHandler so it sets the default handler that exits the app if no listeners respond
require('../Utilities/BackHandler');

function renderApplication               (
  RootComponent                            ,
  initialProps       ,
  rootTag     ,
  WrapperComponent                          ,
  fabric          ,
  showArchitectureIndicator          ,
  scopedPerformanceLogger                     ,
  isLogBox          ,
) {
  invariant(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);

  const renderable = (
    <PerformanceLoggerContext.Provider
      value={scopedPerformanceLogger ?? GlobalPerformanceLogger}>
      <AppContainer
        rootTag={rootTag}
        fabric={fabric}
        showArchitectureIndicator={showArchitectureIndicator}
        WrapperComponent={WrapperComponent}
        internal_excludeLogBox={isLogBox}>
        <RootComponent {...initialProps} rootTag={rootTag} />
      </AppContainer>
    </PerformanceLoggerContext.Provider>
  );

  GlobalPerformanceLogger.startTimespan('renderApplication_React_render');
  if (fabric) {
    require('../Renderer/shims/ReactFabric').render(renderable, rootTag);
  } else {
    require('../Renderer/shims/ReactNative').render(renderable, rootTag);
  }
  GlobalPerformanceLogger.stopTimespan('renderApplication_React_render');
}

module.exports = renderApplication;
