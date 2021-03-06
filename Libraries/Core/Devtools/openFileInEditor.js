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

const getDevServer = require('./getDevServer');

function openFileInEditor(file        , lineNumber        ) {
  fetch(getDevServer().url + 'open-stack-frame', {
    method: 'POST',
    body: JSON.stringify({file, lineNumber}),
  });
}

module.exports = openFileInEditor;
