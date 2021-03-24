/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *       strict-local
 * @format
 */

'use strict';

const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

                                                                         
                                                               
                                                               
                                                                       
import codegenNativeCommands from '../../Utilities/codegenNativeCommands';
import * as React from 'react';

                                           
              
                              
                     
      
  

                                        
                
                            
                                  
    

                                

                               
                                              
                                                  
                        
                         
                   
                               
    

                                                

                          
                            
                                             
                  
            
 

export const Commands                 = codegenNativeCommands                ({
  supportedCommands: ['setNativeSelectedIndex'],
});

const RCTPickerNativeComponent                = requireNativeComponent             (
  'RCTPicker',
);

export default RCTPickerNativeComponent;
