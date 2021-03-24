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

                                            

                                             
                                                             
                
                      
                     
                    
                  
            
                                                                           
                    
                          
                                   
                                 
                                     
                                
                                   
            
 

const UIManager                       =
  global.RN$Bridgeless === true
    ? require('./DummyUIManager') // No UIManager in bridgeless mode
    : require('./PaperUIManager');

module.exports = UIManager;
