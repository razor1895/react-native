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

                                                                            

class DatePickerAndroid {
  static async open(options          )                                {
    throw new Error('DatePickerAndroid is not supported on this platform.');
  }

  /**
   * A date has been selected.
   */
  static +dateSetAction                  = 'dateSetAction';
  /**
   * The dialog has been dismissed.
   */
  static +dismissedAction                    = 'dismissedAction';
}

module.exports = DatePickerAndroid;
