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

const ReactNativeViewConfigRegistry = require('../Renderer/shims/ReactNativeViewConfigRegistry');
const ReactNativeViewViewConfig = require('../Components/View/ReactNativeViewViewConfig');
import verifyComponentAttributeEquivalence from './verifyComponentAttributeEquivalence';

                                   
                          
                                  
                                     
                                           
                         
                        
          
        
        
     
                                
                                     
                               
        
        
     
                     
                       
            
                    
                                                      
                                       
            
        
    
     
  

function registerGeneratedViewConfig(
  componentName        ,
  viewConfig                     ,
) {
  const mergedViewConfig = {
    uiViewClassName: componentName,
    Commands: {},
    /* $FlowFixMe(>=0.122.0 site=react_native_fb) This comment suppresses an
     * error found when Flow v0.122.0 was deployed. To see the error, delete
     * this comment and run Flow. */
    bubblingEventTypes: {
      ...ReactNativeViewViewConfig.bubblingEventTypes,
      ...(viewConfig.bubblingEventTypes || {}),
    },
    /* $FlowFixMe(>=0.122.0 site=react_native_fb) This comment suppresses an
     * error found when Flow v0.122.0 was deployed. To see the error, delete
     * this comment and run Flow. */
    directEventTypes: {
      ...ReactNativeViewViewConfig.directEventTypes,
      ...(viewConfig.directEventTypes || {}),
    },
    /* $FlowFixMe(>=0.122.0 site=react_native_fb) This comment suppresses an
     * error found when Flow v0.122.0 was deployed. To see the error, delete
     * this comment and run Flow. */
    validAttributes: {
      ...ReactNativeViewViewConfig.validAttributes,
      ...(viewConfig.validAttributes || {}),
    },
  };

  ReactNativeViewConfigRegistry.register(componentName, () => {
    verifyComponentAttributeEquivalence(componentName, mergedViewConfig);

    return mergedViewConfig;
  });
}

module.exports = registerGeneratedViewConfig;
