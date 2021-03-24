/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *       strict-local
 * @format
 */

// This function dismisses the currently-open keyboard, if any.

'use strict';

const TextInputState = require('../Components/TextInput/TextInputState');

function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedInput());
}

module.exports = dismissKeyboard;
