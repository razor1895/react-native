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

const React = require('react');

const LogBox = require('../LogBox/LogBox');

                                                             

                             

let YellowBox;
if (__DEV__) {
  YellowBox = class extends React.Component        {
    static ignoreWarnings(patterns                               )       {
      console.warn(
        'YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.',
      );

      LogBox.ignoreLogs(patterns);
    }

    static install()       {
      console.warn(
        'YellowBox has been replaced with LogBox. Please call LogBox.install() instead.',
      );
      LogBox.install();
    }

    static uninstall()       {
      console.warn(
        'YellowBox has been replaced with LogBox. Please call LogBox.uninstall() instead.',
      );
      LogBox.uninstall();
    }

    render()             {
      return null;
    }
  };
} else {
  YellowBox = class extends React.Component        {
    static ignoreWarnings(patterns                               )       {
      // Do nothing.
    }

    static install()       {
      // Do nothing.
    }

    static uninstall()       {
      // Do nothing.
    }

    render()             {
      return null;
    }
  };
}

module.exports = (YellowBox                                   
                                                      
                  
                    
     
 );
