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
  return {semantic: names};
};

                                           
                    
                   
  

export const DynamicColorIOSPrivate = (
  tuple                             ,
)             => {
  return {dynamic: {light: tuple.light, dark: tuple.dark}};
};

export const normalizeColorObject = (
  color                  ,
)                       => {
  if ('semantic' in color) {
    // an ios semantic color
    return color;
  } else if ('dynamic' in color && color.dynamic !== undefined) {
    const normalizeColor = require('./normalizeColor');

    // a dynamic, appearance aware color
    const dynamic = color.dynamic;
    const dynamicColor                   = {
      dynamic: {
        light: normalizeColor(dynamic.light),
        dark: normalizeColor(dynamic.dark),
      },
    };
    return dynamicColor;
  }

  return null;
};

export const processColorObject = (
  color                  ,
)                    => {
  if ('dynamic' in color && color.dynamic != null) {
    const processColor = require('./processColor');
    const dynamic = color.dynamic;
    const dynamicColor                   = {
      dynamic: {
        light: processColor(dynamic.light),
        dark: processColor(dynamic.dark),
      },
    };
    return dynamicColor;
  }
  return color;
};
