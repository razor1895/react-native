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

import NativePlatformConstantsIOS from './NativePlatformConstantsIOS';

                                           
              
             
          
     
  

const Platform = {
  __constants: null,
  OS: 'ios',
  get Version()         {
    return this.constants.osVersion;
  },
  get constants()    
                                 
                           
                       
                      
                          
                    
                    
                    
                          
       
                       
     {
    if (this.__constants == null) {
      this.__constants = NativePlatformConstantsIOS.getConstants();
    }
    return this.__constants;
  },
  get isPad()          {
    return this.constants.interfaceIdiom === 'pad';
  },
  /**
   * Deprecated, use `isTV` instead.
   */
  get isTVOS()          {
    return Platform.isTV;
  },
  get isTV()          {
    return this.constants.interfaceIdiom === 'tv';
  },
  get isTesting()          {
    if (__DEV__) {
      return this.constants.isTesting;
    }
    return false;
  },
  select:          (spec                             )            =>
    'ios' in spec ? spec.ios : 'native' in spec ? spec.native : spec.default,
};

module.exports = Platform;
