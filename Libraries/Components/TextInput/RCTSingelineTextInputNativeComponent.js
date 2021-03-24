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

                                                                         
import requireNativeComponent from '../../ReactNative/requireNativeComponent';
import codegenNativeCommands from '../../Utilities/codegenNativeCommands';
                                                    
import * as React from 'react';
                                                                       
import RCTSinglelineTextInputViewConfig from './RCTSinglelineTextInputViewConfig';
const ReactNativeViewConfigRegistry = require('../../Renderer/shims/ReactNativeViewConfigRegistry');

                                       

                                                          

export const Commands                 = codegenNativeCommands                ({
  supportedCommands: ['focus', 'blur', 'setTextAndSelection'],
});

let SinglelineTextInputNativeComponent;
if (global.RN$Bridgeless) {
  ReactNativeViewConfigRegistry.register('RCTSinglelineTextInputView', () => {
    return RCTSinglelineTextInputViewConfig;
  });
  SinglelineTextInputNativeComponent = 'RCTSinglelineTextInputView';
} else {
  SinglelineTextInputNativeComponent = requireNativeComponent       (
    'RCTSinglelineTextInputView',
  );
}

// flowlint-next-line unclear-type:off
export default ((SinglelineTextInputNativeComponent     )                      );
