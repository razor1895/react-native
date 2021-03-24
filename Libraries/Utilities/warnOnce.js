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

const warning = require('fbjs/lib/warning');

const warnedKeys                           = {};

/**
 * A simple function that prints a warning message once per session.
 *
 * @param {string} key - The key used to ensure the message is printed once.
 *                       This should be unique to the callsite.
 * @param {string} message - The message to print
 */
function warnOnce(key        , message        ) {
  if (warnedKeys[key]) {
    return;
  }

  warning(false, message);

  warnedKeys[key] = true;
}

module.exports = warnOnce;
