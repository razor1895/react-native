/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import NativeDevSettings from '../NativeModules/specs/NativeDevSettings';
import NativeEventEmitter from '../EventEmitter/NativeEventEmitter';

class DevSettings extends NativeEventEmitter {
  _menuItems;

  constructor() {
    super(NativeDevSettings);

    this._menuItems = new Map();
  }

  addMenuItem(title, handler) {
    // Make sure items are not added multiple times. This can
    // happen when hot reloading the module that registers the
    // menu items. The title is used as the id which means we
    // don't support multiple items with the same name.
    const oldHandler = this._menuItems.get(title);
    if (oldHandler != null) {
      this.removeListener('didPressMenuItem', oldHandler);
    } else {
      NativeDevSettings.addMenuItem(title);
    }

    this._menuItems.set(title, handler);
    this.addListener('didPressMenuItem', event => {
      if (event.title === title) {
        handler();
      }
    });
  }

  reload(reason) {
    if (typeof NativeDevSettings.reloadWithReason === 'function') {
      NativeDevSettings.reloadWithReason(reason || 'Uncategorized from JS');
    } else {
      NativeDevSettings.reload();
    }
  }

  onFastRefresh() {
    if (typeof NativeDevSettings.onFastRefresh === 'function') {
      NativeDevSettings.onFastRefresh();
    }
  }

  // TODO: Add other dev setting methods exposed by the native module.
}

// Avoid including the full `NativeDevSettings` class in prod.
class NoopDevSettings {
  addMenuItem(title, handler) {}
  reload() {}
}

module.exports = __DEV__ ? new DevSettings() : new NoopDevSettings();
