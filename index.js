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

const invariant = require('invariant');
const warnOnce = require('./Libraries/Utilities/warnOnce');

module.exports = {
  // Components
  get AccessibilityInfo() {
    return require('./Libraries/Components/AccessibilityInfo/AccessibilityInfo');
  },
  get ActivityIndicator() {
    return require('./Libraries/Components/ActivityIndicator/ActivityIndicator');
  },
  get Button() {
    return require('./Libraries/Components/Button');
  },
  get CheckBox() {
    warnOnce(
      'checkBox-moved',
      'CheckBox has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/checkbox' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-checkbox',
    );
    return require('./Libraries/Components/CheckBox/CheckBox');
  },
  get DatePickerIOS() {
    warnOnce(
      'DatePickerIOS-merged',
      'DatePickerIOS has been merged with DatePickerAndroid and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. " +
        'See https://github.com/react-native-community/datetimepicker',
    );
    return require('./Libraries/Components/DatePicker/DatePickerIOS');
  },
  get DrawerLayoutAndroid() {
    return require('./Libraries/Components/DrawerAndroid/DrawerLayoutAndroid');
  },
  get FlatList() {
    return require('./Libraries/Lists/FlatList');
  },
  get Image() {
    return require('./Libraries/Image/Image');
  },
  get ImageBackground() {
    return require('./Libraries/Image/ImageBackground');
  },
  get InputAccessoryView() {
    return require('./Libraries/Components/TextInput/InputAccessoryView');
  },
  get KeyboardAvoidingView() {
    return require('./Libraries/Components/Keyboard/KeyboardAvoidingView');
  },
  get MaskedViewIOS() {
    warnOnce(
      'maskedviewios-moved',
      'MaskedViewIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/masked-view' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-masked-view',
    );
    return require('./Libraries/Components/MaskedView/MaskedViewIOS');
  },
  get Modal() {
    return require('./Libraries/Modal/Modal');
  },
  get Picker() {
    warnOnce(
      'picker-moved',
      'Picker has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/picker' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-picker',
    );
    return require('./Libraries/Components/Picker/Picker');
  },
  get PickerIOS() {
    warnOnce(
      'pickerios-moved',
      'PickerIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/picker' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-picker',
    );
    return require('./Libraries/Components/Picker/PickerIOS');
  },
  get Pressable() {
    return require('./Libraries/Components/Pressable/Pressable').default;
  },
  get ProgressBarAndroid() {
    warnOnce(
      'progress-bar-android-moved',
      'ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. " +
        'See https://github.com/react-native-community/progress-bar-android',
    );
    return require('./Libraries/Components/ProgressBarAndroid/ProgressBarAndroid');
  },
  get ProgressViewIOS() {
    warnOnce(
      'progress-view-ios-moved',
      'ProgressViewIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/progress-view' instead of 'react-native'. " +
        'See https://github.com/react-native-community/progress-view',
    );
    return require('./Libraries/Components/ProgressViewIOS/ProgressViewIOS');
  },
  get SafeAreaView() {
    return require('./Libraries/Components/SafeAreaView/SafeAreaView');
  },
  get ScrollView() {
    return require('./Libraries/Components/ScrollView/ScrollView');
  },
  get SectionList() {
    return require('./Libraries/Lists/SectionList');
  },
  get SegmentedControlIOS() {
    warnOnce(
      'segmented-control-ios-moved',
      'SegmentedControlIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/segmented-control' instead of 'react-native'. " +
        'See https://github.com/react-native-community/segmented-control',
    );
    return require('./Libraries/Components/SegmentedControlIOS/SegmentedControlIOS');
  },
  get Slider() {
    warnOnce(
      'slider-moved',
      'Slider has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-slider',
    );
    return require('./Libraries/Components/Slider/Slider');
  },
  get Switch() {
    return require('./Libraries/Components/Switch/Switch');
  },
  get RefreshControl() {
    return require('./Libraries/Components/RefreshControl/RefreshControl');
  },
  get StatusBar() {
    return require('./Libraries/Components/StatusBar/StatusBar');
  },
  get Text() {
    return require('./Libraries/Text/Text');
  },
  get TextInput() {
    return require('./Libraries/Components/TextInput/TextInput');
  },
  get Touchable() {
    return require('./Libraries/Components/Touchable/Touchable');
  },
  get TouchableHighlight() {
    return require('./Libraries/Components/Touchable/TouchableHighlight');
  },
  get TouchableNativeFeedback() {
    return require('./Libraries/Components/Touchable/TouchableNativeFeedback');
  },
  get TouchableOpacity() {
    return require('./Libraries/Components/Touchable/TouchableOpacity');
  },
  get TouchableWithoutFeedback() {
    return require('./Libraries/Components/Touchable/TouchableWithoutFeedback');
  },
  get View() {
    return require('./Libraries/Components/View/View');
  },
  get VirtualizedList() {
    return require('./Libraries/Lists/VirtualizedList');
  },
  get VirtualizedSectionList() {
    return require('./Libraries/Lists/VirtualizedSectionList');
  },

  // APIs
  get ActionSheetIOS() {
    return require('./Libraries/ActionSheetIOS/ActionSheetIOS');
  },
  get Alert() {
    return require('./Libraries/Alert/Alert');
  },
  get Animated() {
    return require('./Libraries/Animated/src/Animated');
  },
  get Appearance() {
    return require('./Libraries/Utilities/Appearance');
  },
  get AppRegistry() {
    return require('./Libraries/ReactNative/AppRegistry');
  },
  get AppState() {
    return require('./Libraries/AppState/AppState');
  },
  get AsyncStorage() {
    warnOnce(
      'async-storage-moved',
      'AsyncStorage has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/async-storage' instead of 'react-native'. " +
        'See https://github.com/react-native-community/async-storage',
    );
    return require('./Libraries/Storage/AsyncStorage');
  },
  get BackHandler() {
    return require('./Libraries/Utilities/BackHandler');
  },
  get Clipboard() {
    warnOnce(
      'clipboard-moved',
      'Clipboard has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/clipboard' instead of 'react-native'. " +
        'See https://github.com/react-native-community/clipboard',
    );
    return require('./Libraries/Components/Clipboard/Clipboard');
  },
  get DatePickerAndroid() {
    warnOnce(
      'DatePickerAndroid-merged',
      'DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. " +
        'See https://github.com/react-native-community/datetimepicker',
    );
    return require('./Libraries/Components/DatePickerAndroid/DatePickerAndroid');
  },
  get DeviceInfo() {
    return require('./Libraries/Utilities/DeviceInfo');
  },
  get DevSettings() {
    return require('./Libraries/Utilities/DevSettings');
  },
  get Dimensions() {
    return require('./Libraries/Utilities/Dimensions');
  },
  get Easing() {
    return require('./Libraries/Animated/src/Easing');
  },
  get findNodeHandle() {
    return require('./Libraries/Renderer/shims/ReactNative').findNodeHandle;
  },
  get I18nManager() {
    return require('./Libraries/ReactNative/I18nManager');
  },
  get ImagePickerIOS() {
    warnOnce(
      'imagePickerIOS-moved',
      'ImagePickerIOS has been extracted from react-native core and will be removed in a future release. ' +
        "Please upgrade to use either '@react-native-community/react-native-image-picker' or 'expo-image-picker'. " +
        "If you cannot upgrade to a different library, please install the deprecated '@react-native-community/image-picker-ios' package. " +
        'See https://github.com/react-native-community/react-native-image-picker-ios',
    );
    return require('./Libraries/Image/ImagePickerIOS');
  },
  get InteractionManager() {
    return require('./Libraries/Interaction/InteractionManager');
  },
  get Keyboard() {
    return require('./Libraries/Components/Keyboard/Keyboard');
  },
  get LayoutAnimation() {
    return require('./Libraries/LayoutAnimation/LayoutAnimation');
  },
  get Linking() {
    return require('./Libraries/Linking/Linking');
  },
  get LogBox() {
    return require('./Libraries/LogBox/LogBox');
  },
  get NativeDialogManagerAndroid() {
    return require('./Libraries/NativeModules/specs/NativeDialogManagerAndroid')
      .default;
  },
  get NativeEventEmitter() {
    return require('./Libraries/EventEmitter/NativeEventEmitter');
  },
  get Networking() {
    return require('./Libraries/Network/RCTNetworking');
  },
  get PanResponder() {
    return require('./Libraries/Interaction/PanResponder');
  },
  get PermissionsAndroid() {
    return require('./Libraries/PermissionsAndroid/PermissionsAndroid');
  },
  get PixelRatio() {
    return require('./Libraries/Utilities/PixelRatio');
  },
  get PushNotificationIOS() {
    warnOnce(
      'pushNotificationIOS-moved',
      'PushNotificationIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. " +
        'See https://github.com/react-native-community/push-notification-ios',
    );
    return require('./Libraries/PushNotificationIOS/PushNotificationIOS');
  },
  get Settings() {
    return require('./Libraries/Settings/Settings');
  },
  get Share() {
    return require('./Libraries/Share/Share');
  },
  get StatusBarIOS() {
    warnOnce(
      'StatusBarIOS-merged',
      'StatusBarIOS has been merged with StatusBar and will be removed in a future release. Use StatusBar for mutating the status bar',
    );
    return require('./Libraries/Components/StatusBar/StatusBarIOS');
  },
  get StyleSheet() {
    return require('./Libraries/StyleSheet/StyleSheet');
  },
  get Systrace() {
    return require('./Libraries/Performance/Systrace');
  },
  get ToastAndroid() {
    return require('./Libraries/Components/ToastAndroid/ToastAndroid');
  },
  get TurboModuleRegistry() {
    return require('./Libraries/TurboModule/TurboModuleRegistry');
  },
  get TVEventHandler() {
    return require('./Libraries/Components/AppleTV/TVEventHandler');
  },
  get UIManager() {
    return require('./Libraries/ReactNative/UIManager');
  },
  get unstable_batchedUpdates() {
    return require('./Libraries/Renderer/shims/ReactNative')
      .unstable_batchedUpdates;
  },
  get useColorScheme() {
    return require('./Libraries/Utilities/useColorScheme').default;
  },
  get useWindowDimensions() {
    return require('./Libraries/Utilities/useWindowDimensions').default;
  },
  get UTFSequence() {
    return require('./Libraries/UTFSequence');
  },
  get Vibration() {
    return require('./Libraries/Vibration/Vibration');
  },
  get YellowBox() {
    return require('./Libraries/YellowBox/YellowBoxDeprecated');
  },

  // Plugins
  get DeviceEventEmitter() {
    return require('./Libraries/EventEmitter/RCTDeviceEventEmitter');
  },
  get NativeAppEventEmitter() {
    return require('./Libraries/EventEmitter/RCTNativeAppEventEmitter');
  },
  get NativeModules() {
    return require('./Libraries/BatchedBridge/NativeModules');
  },
  get Platform() {
    return require('./Libraries/Utilities/Platform');
  },
  get processColor() {
    return require('./Libraries/StyleSheet/processColor');
  },
  get PlatformColor() {
    return require('./Libraries/StyleSheet/PlatformColorValueTypes')
      .PlatformColor;
  },
  get DynamicColorIOS() {
    return require('./Libraries/StyleSheet/PlatformColorValueTypesIOS')
      .DynamicColorIOS;
  },
  get ColorAndroid() {
    return require('./Libraries/StyleSheet/PlatformColorValueTypesAndroid')
      .ColorAndroid;
  },
  get requireNativeComponent() {
    return require('./Libraries/ReactNative/requireNativeComponent');
  },
  get unstable_RootTagContext() {
    return require('./Libraries/ReactNative/RootTagContext');
  },
  get unstable_enableLogBox() {
    return () =>
      console.warn(
        'LogBox is enabled by default so there is no need to call unstable_enableLogBox() anymore. This is a no op and will be removed in the next version.',
      );
  },
  // Prop Types
  get ColorPropType() {
    return require('./Libraries/DeprecatedPropTypes/DeprecatedColorPropType');
  },
  get EdgeInsetsPropType() {
    return require('./Libraries/DeprecatedPropTypes/DeprecatedEdgeInsetsPropType');
  },
  get PointPropType() {
    return require('./Libraries/DeprecatedPropTypes/DeprecatedPointPropType');
  },
  get ViewPropTypes() {
    return require('./Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes');
  },
};

if (__DEV__) {
  // $FlowFixMe This is intentional: Flow will error when attempting to access ART.
  Object.defineProperty(module.exports, 'ART', {
    configurable: true,
    get() {
      invariant(
        false,
        'ART has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/art' instead of 'react-native'. " +
          'See https://github.com/react-native-community/art',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access ListView.
  Object.defineProperty(module.exports, 'ListView', {
    configurable: true,
    get() {
      invariant(
        false,
        'ListView has been removed from React Native. ' +
          'See https://fb.me/nolistview for more information or use ' +
          '`deprecated-react-native-listview`.',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access SwipeableListView.
  Object.defineProperty(module.exports, 'SwipeableListView', {
    configurable: true,
    get() {
      invariant(
        false,
        'SwipeableListView has been removed from React Native. ' +
          'See https://fb.me/nolistview for more information or use ' +
          '`deprecated-react-native-swipeable-listview`.',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access WebView.
  Object.defineProperty(module.exports, 'WebView', {
    configurable: true,
    get() {
      invariant(
        false,
        'WebView has been removed from React Native. ' +
          "It can now be installed and imported from 'react-native-webview' instead of 'react-native'. " +
          'See https://github.com/react-native-community/react-native-webview',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access NetInfo.
  Object.defineProperty(module.exports, 'NetInfo', {
    configurable: true,
    get() {
      invariant(
        false,
        'NetInfo has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/netinfo' instead of 'react-native'. " +
          'See https://github.com/react-native-community/react-native-netinfo',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access CameraRoll.
  Object.defineProperty(module.exports, 'CameraRoll', {
    configurable: true,
    get() {
      invariant(
        false,
        'CameraRoll has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/cameraroll' instead of 'react-native'. " +
          'See https://github.com/react-native-community/react-native-cameraroll',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access ImageStore.
  Object.defineProperty(module.exports, 'ImageStore', {
    configurable: true,
    get() {
      invariant(
        false,
        'ImageStore has been removed from React Native. ' +
          'To get a base64-encoded string from a local image use either of the following third-party libraries:' +
          "* expo-file-system: `readAsStringAsync(filepath, 'base64')`" +
          "* react-native-fs: `readFile(filepath, 'base64')`",
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access ImageEditor.
  Object.defineProperty(module.exports, 'ImageEditor', {
    configurable: true,
    get() {
      invariant(
        false,
        'ImageEditor has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/image-editor' instead of 'react-native'. " +
          'See https://github.com/react-native-community/react-native-image-editor',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access TimePickerAndroid.
  Object.defineProperty(module.exports, 'TimePickerAndroid', {
    configurable: true,
    get() {
      invariant(
        false,
        'TimePickerAndroid has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/datetimepicker' instead of 'react-native'. " +
          'See https://github.com/react-native-community/datetimepicker',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access ToolbarAndroid.
  Object.defineProperty(module.exports, 'ToolbarAndroid', {
    configurable: true,
    get() {
      invariant(
        false,
        'ToolbarAndroid has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/toolbar-android' instead of 'react-native'. " +
          'See https://github.com/react-native-community/toolbar-android',
      );
    },
  });

  // $FlowFixMe This is intentional: Flow will error when attempting to access ViewPagerAndroid.
  Object.defineProperty(module.exports, 'ViewPagerAndroid', {
    configurable: true,
    get() {
      invariant(
        false,
        'ViewPagerAndroid has been removed from React Native. ' +
          "It can now be installed and imported from '@react-native-community/viewpager' instead of 'react-native'. " +
          'See https://github.com/react-native-community/react-native-viewpager',
      );
    },
  });
}
