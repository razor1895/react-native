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

                                                  

                 
                                              
 

// Flow doesn't support static declarations in interface
                                                       

                                                                  
                                                

const JSInspector = {
  registerAgent(type            ) {
    if (global.__registerInspectorAgent) {
      global.__registerInspectorAgent(type);
    }
  },
  getTimestamp()         {
    return global.__inspectorTimestamp();
  },
};

module.exports = JSInspector;
