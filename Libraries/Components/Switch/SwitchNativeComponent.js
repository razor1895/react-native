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

                                                                                
                                                                 
                                                     
import * as React from 'react';

import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
                                                                         

                                     
                 
    

                               
               

          
                                         
                                      
                          
                            
                               

                     
                           
                                   
                                  

           
                                                      
    

                                                

                          
                                                                                
 

export const Commands                 = codegenNativeCommands                ({
  supportedCommands: ['setValue'],
});

export default (codegenNativeComponent             ('Switch', {
  paperComponentName: 'RCTSwitch',
  excludedPlatform: 'android',
})               );
