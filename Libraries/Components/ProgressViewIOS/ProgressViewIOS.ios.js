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

const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');

import RCTProgressViewNativeComponent from './RCTProgressViewNativeComponent';
                                                         
                                                                 
                                                     

                         
               

     
                            
     
                                           

     
                                          
     
                     

     
                                               
     
                                  

     
                                              
     
                               

     
                                                        
     
                               

     
                                                            
     
                            
    

/**
 * Use `ProgressViewIOS` to render a UIProgressView on iOS.
 */
const ProgressViewIOS = (
  props       ,
  forwardedRef                                                    ,
) => (
  <RCTProgressViewNativeComponent
    {...props}
    style={[styles.progressView, props.style]}
    ref={forwardedRef}
  />
);

const styles = StyleSheet.create({
  progressView: {
    height: 2,
  },
});

const ProgressViewIOSWithRef = React.forwardRef(ProgressViewIOS);

module.exports = (ProgressViewIOSWithRef                                       );
