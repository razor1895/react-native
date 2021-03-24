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

const requireNativeComponent = require('../ReactNative/requireNativeComponent');

                                                                        
                                                               
                                                                      
                                             
                                                                
                                                             
                                                              

import ImageViewViewConfig from './ImageViewViewConfig';
const ReactNativeViewConfigRegistry = require('../Renderer/shims/ReactNativeViewConfigRegistry');

                               
                
               

                                                     

                     
                         

                         
                                   
                                                                  
                    
                       
                                
    

let ImageViewNativeComponent;
if (global.RN$Bridgeless) {
  ReactNativeViewConfigRegistry.register('RCTImageView', () => {
    return ImageViewViewConfig;
  });
  ImageViewNativeComponent = 'RCTImageView';
} else {
  ImageViewNativeComponent = requireNativeComponent             (
    'RCTImageView',
  );
}

// flowlint-next-line unclear-type:off
export default ((ImageViewNativeComponent     )                            );
