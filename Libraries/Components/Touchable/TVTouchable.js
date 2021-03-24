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

import invariant from 'invariant';
import ReactNative from '../../Renderer/shims/ReactNative';
             
            
             
             
                                    
import Platform from '../../Utilities/Platform';
import TVEventHandler from '../../Components/AppleTV/TVEventHandler';

                                     
                             
                                      
                                        
                                        
    

export default class TVTouchable {
  _tvEventHandler                ;

  constructor(component     , config                   ) {
    invariant(Platform.isTV, 'TVTouchable: Requires `Platform.isTV`.');
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(component, (_, tvData) => {
      tvData.dispatchConfig = {};
      if (ReactNative.findNodeHandle(component) === tvData.tag) {
        if (tvData.eventType === 'focus') {
          config.onFocus(tvData);
        } else if (tvData.eventType === 'blur') {
          config.onBlur(tvData);
        } else if (tvData.eventType === 'select') {
          if (!config.getDisabled()) {
            config.onPress(tvData);
          }
        }
      }
    });
  }

  destroy()       {
    this._tvEventHandler.disable();
  }
}
