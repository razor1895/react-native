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

                                                  
import {ColorAndroidPrivate} from './PlatformColorValueTypes';

export const ColorAndroid = (color        )             => {
  return ColorAndroidPrivate(color);
};
