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

import NativeSourceCode from '../../NativeModules/specs/NativeSourceCode';

let _cachedDevServerURL         ;
const FALLBACK = 'http://localhost:8081/';

                      
              
                                  
     
  

/**
 * Many RN development tools rely on the development server (packager) running
 * @return URL to packager with trailing slash
 */
function getDevServer()                {
  if (_cachedDevServerURL === undefined) {
    const match = NativeSourceCode.getConstants().scriptURL.match(
      /^https?:\/\/.*?\//,
    );
    _cachedDevServerURL = match ? match[0] : null;
  }

  return {
    url: _cachedDevServerURL || FALLBACK,
    bundleLoadedFromServer: _cachedDevServerURL !== null,
  };
}

module.exports = getDevServer;
