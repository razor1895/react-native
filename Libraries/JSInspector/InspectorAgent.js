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

                                                                 

class InspectorAgent {
  _eventSender             ;

  constructor(eventSender             ) {
    this._eventSender = eventSender;
  }

  sendEvent(name        , params        ) {
    this._eventSender(name, params);
  }
}

module.exports = InspectorAgent;
