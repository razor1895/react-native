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

             
              
                       
                                                   

import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
                                                                                          

                                                                 
                                                     

                                     
                 
    

                               
               

          
                                         
                                       
                           
                                   
                                  
                                      
                                   
                               
                               

           
                                                     
    

                                             

                          
                    
                                          
                   
            
 

export const Commands                 = codegenNativeCommands                ({
  supportedCommands: ['setNativeValue'],
});

export default (codegenNativeComponent             ('AndroidSwitch', {
  interfaceOnly: true,
})            );
