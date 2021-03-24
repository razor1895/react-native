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

const Platform = require('../../Utilities/Platform');
const ReactNativeViewViewConfigAndroid = require('./ReactNativeViewViewConfigAndroid');

const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import * as React from 'react';

import codegenNativeCommands from '../../Utilities/codegenNativeCommands';
                                               
                                                                         

                                                               

let NativeViewComponent;
let viewConfig 
         
      
                                      
                                         
                                               
                            
                             
              
            
            
         
                                    
                                                                     
            
         
                              
                         
                           
                
                        
                                                          
                                           
                
            
        
      ;

if (__DEV__ || global.RN$Bridgeless) {
  // On Android, View extends the base component with additional view-only props
  // On iOS, the base component is View
  if (Platform.OS === 'android') {
    viewConfig = ReactNativeViewViewConfigAndroid;
    registerGeneratedViewConfig('RCTView', ReactNativeViewViewConfigAndroid);
  } else {
    viewConfig = {};
    registerGeneratedViewConfig('RCTView', {uiViewClassName: 'RCTView'});
  }

  NativeViewComponent = 'RCTView';
} else {
  NativeViewComponent = requireNativeComponent('RCTView');
}

export const __INTERNAL_VIEW_CONFIG = viewConfig;

                          
                   
                                                    
              
              
            
                
                                                    
                     
            
 

export const Commands                 = codegenNativeCommands                ({
  supportedCommands: ['hotspotUpdate', 'setPressed'],
});

export default ((NativeViewComponent     )                         );
