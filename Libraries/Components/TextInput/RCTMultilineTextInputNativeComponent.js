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

                                       

                                                          

export const Commands                 = codegenNativeCommands                ({
  supportedCommands: ['focus', 'blur', 'setTextAndSelection'],
});

const SinglelineTextInputNativeComponent                       = requireNativeComponent       (
  'RCTMultilineTextInputView',
);

export default SinglelineTextInputNativeComponent;
