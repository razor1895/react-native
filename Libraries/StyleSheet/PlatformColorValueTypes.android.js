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

                                                  
                                                        

                                       
                                 
  

export const PlatformColor = (...names               )             => {
  return {resource_paths: names};
};

export const ColorAndroidPrivate = (color        )             => {
  return {resource_paths: [color]};
};

export const normalizeColorObject = (
  color                  ,
)                       => {
  if ('resource_paths' in color) {
    return color;
  }
  return null;
};

export const processColorObject = (
  color                  ,
)                    => {
  return color;
};
