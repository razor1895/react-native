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

import NativePlatformConstantsAndroid from './NativePlatformConstantsAndroid';

                                           
              
             
              
     
  

const Platform = {
  __constants: null,
  OS: 'android',
  get Version()         {
    return this.constants.Version;
  },
  get constants()    
                       
                          
                    
                    
                    
                          
       
                    
                    
                   
                        
                  
                        
                   
     {
    if (this.__constants == null) {
      this.__constants = NativePlatformConstantsAndroid.getConstants();
    }
    return this.__constants;
  },
  get isTesting()          {
    if (__DEV__) {
      return this.constants.isTesting;
    }
    return false;
  },
  get isTV()          {
    return this.constants.uiMode === 'tv';
  },
  select:          (spec                             )            =>
    'android' in spec
      ? spec.android
      : 'native' in spec
      ? spec.native
      : spec.default,
};

module.exports = Platform;
