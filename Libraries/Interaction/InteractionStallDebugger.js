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

const BridgeSpyStallHandler = require('./BridgeSpyStallHandler');
const JSEventLoopWatchdog = require('./JSEventLoopWatchdog');

const InteractionStallDebugger = {
  install(options                            )       {
    JSEventLoopWatchdog.install(options);
    BridgeSpyStallHandler.register();
  },
};

module.exports = InteractionStallDebugger;
