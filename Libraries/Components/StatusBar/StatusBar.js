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

const Platform = require('../../Utilities/Platform');
const React = require('react');

const invariant = require('invariant');
const processColor = require('../../StyleSheet/processColor');
                                                                 

import NativeStatusBarManagerAndroid from './NativeStatusBarManagerAndroid';
import NativeStatusBarManagerIOS from './NativeStatusBarManagerIOS';

/**
 * Status bar style
 */
                                    
     
                                                               
     
                  
     
                                           
     
                          
     
                                           
     
                         
     
   

/**
 * Status bar animation
 */
                                        
     
                 
     
               
     
                   
     
               
     
                    
     
                
     
   

                                
     
                                            
                      
     
                                
     
                                      
                                                                             
                                                                   
    
                      
     
                         
    

                            
     
                                                         
    
                  
     
                                             
     
                                                                                    
                              
    
                  
     
                                           
    

                         
                  
              
     
                                 
     
                    
     
                                                                              
                                                        
     
                      
     
                                           
     
                                                             
    

/**
 * Merges the prop stack with the default values.
 */
function mergePropsStack(
  propsStack               ,
  defaultValues        ,
)         {
  return propsStack.reduce((prev, cur) => {
    for (const prop in cur) {
      if (cur[prop] != null) {
        prev[prop] = cur[prop];
      }
    }
    return prev;
  }, Object.assign({}, defaultValues));
}

/**
 * Returns an object to insert in the props stack from the props
 * and the transition/animation info.
 */
function createStackEntry(props     )      {
  return {
    backgroundColor:
      props.backgroundColor != null
        ? {
            value: props.backgroundColor,
            animated: props.animated,
          }
        : null,
    barStyle:
      props.barStyle != null
        ? {
            value: props.barStyle,
            animated: props.animated,
          }
        : null,
    translucent: props.translucent,
    hidden:
      props.hidden != null
        ? {
            value: props.hidden,
            animated: props.animated,
            transition: props.showHideTransition,
          }
        : null,
    networkActivityIndicatorVisible: props.networkActivityIndicatorVisible,
  };
}

/**
 * Component to control the app status bar.
 *
 * ### Usage with Navigator
 *
 * It is possible to have multiple `StatusBar` components mounted at the same
 * time. The props will be merged in the order the `StatusBar` components were
 * mounted. One use case is to specify status bar styles per route using `Navigator`.
 *
 * ```
 *  <View>
 *    <StatusBar
 *      backgroundColor="blue"
 *      barStyle="light-content"
 *    />
 *    <Navigator
 *      initialRoute={{statusBarHidden: true}}
 *      renderScene={(route, navigator) =>
 *        <View>
 *          <StatusBar hidden={route.statusBarHidden} />
 *          ...
 *        </View>
 *      }
 *    />
 *  </View>
 * ```
 *
 * ### Imperative API
 *
 * For cases where using a component is not ideal, there are static methods
 * to manipulate the `StatusBar` display stack. These methods have the same
 * behavior as mounting and unmounting a `StatusBar` component.
 *
 * For example, you can call `StatusBar.pushStackEntry` to update the status bar
 * before launching a third-party native UI component, and then call
 * `StatusBar.popStackEntry` when completed.
 *
 * ```
 * const openThirdPartyBugReporter = async () => {
 *   // The bug reporter has a dark background, so we push a new status bar style.
 *   const stackEntry = StatusBar.pushStackEntry({barStyle: 'light-content'});
 *
 *   // `open` returns a promise that resolves when the UI is dismissed.
 *   await BugReporter.open();
 *
 *   // Don't forget to call `popStackEntry` when you're done.
 *   StatusBar.popStackEntry(stackEntry);
 * };
 * ```
 *
 * There is a legacy imperative API that enables you to manually update the
 * status bar styles. However, the legacy API does not update the internal
 * `StatusBar` display stack, which means that any changes will be overridden
 * whenever a `StatusBar` component is mounted or unmounted.
 *
 * It is strongly advised that you use `pushStackEntry`, `popStackEntry`, or
 * `replaceStackEntry` instead of the static methods beginning with `set`.
 *
 * ### Constants
 *
 * `currentHeight` (Android only) The height of the status bar.
 */
class StatusBar extends React.Component        {
  static _propsStack = [];

  static _defaultProps = createStackEntry({
    animated: false,
    showHideTransition: 'fade',
    backgroundColor:
      Platform.OS === 'android'
        ? NativeStatusBarManagerAndroid.getConstants()
            .DEFAULT_BACKGROUND_COLOR ?? 'black'
        : 'black',
    barStyle: 'default',
    translucent: false,
    hidden: false,
    networkActivityIndicatorVisible: false,
  });

  // Timer for updating the native module values at the end of the frame.
  static _updateImmediate = null;

  // The current merged values from the props stack.
  static _currentValues = null;

  // TODO(janic): Provide a real API to deal with status bar height. See the
  // discussion in #6195.
  /**
   * The current height of the status bar on the device.
   *
   * @platform android
   */
  static currentHeight          =
    Platform.OS === 'android'
      ? NativeStatusBarManagerAndroid.getConstants().HEIGHT
      : null;

  // Provide an imperative API as static functions of the component.
  // See the corresponding prop for more detail.

  /**
   * Show or hide the status bar
   * @param hidden Hide the status bar.
   * @param animation Optional animation when
   *    changing the status bar hidden property.
   */
  static setHidden(hidden         , animation                     ) {
    animation = animation || 'none';
    StatusBar._defaultProps.hidden.value = hidden;
    if (Platform.OS === 'ios') {
      NativeStatusBarManagerIOS.setHidden(hidden, animation);
    } else if (Platform.OS === 'android') {
      NativeStatusBarManagerAndroid.setHidden(hidden);
    }
  }

  /**
   * Set the status bar style
   * @param style Status bar style to set
   * @param animated Animate the style change.
   */
  static setBarStyle(style                , animated          ) {
    animated = animated || false;
    StatusBar._defaultProps.barStyle.value = style;
    if (Platform.OS === 'ios') {
      NativeStatusBarManagerIOS.setStyle(style, animated);
    } else if (Platform.OS === 'android') {
      NativeStatusBarManagerAndroid.setStyle(style);
    }
  }

  /**
   * Control the visibility of the network activity indicator
   * @param visible Show the indicator.
   */
  static setNetworkActivityIndicatorVisible(visible         ) {
    if (Platform.OS !== 'ios') {
      console.warn(
        '`setNetworkActivityIndicatorVisible` is only available on iOS',
      );
      return;
    }
    StatusBar._defaultProps.networkActivityIndicatorVisible = visible;
    NativeStatusBarManagerIOS.setNetworkActivityIndicatorVisible(visible);
  }

  /**
   * Set the background color for the status bar
   * @param color Background color.
   * @param animated Animate the style change.
   */
  static setBackgroundColor(color        , animated          ) {
    if (Platform.OS !== 'android') {
      console.warn('`setBackgroundColor` is only available on Android');
      return;
    }
    animated = animated || false;
    StatusBar._defaultProps.backgroundColor.value = color;

    const processedColor = processColor(color);
    if (processedColor == null) {
      console.warn(
        `\`StatusBar.setBackgroundColor\`: Color ${color} parsed to null or undefined`,
      );
      return;
    }
    invariant(
      typeof processedColor === 'number',
      'Unexpected color given for StatusBar.setBackgroundColor',
    );

    NativeStatusBarManagerAndroid.setColor(processedColor, animated);
  }

  /**
   * Control the translucency of the status bar
   * @param translucent Set as translucent.
   */
  static setTranslucent(translucent         ) {
    if (Platform.OS !== 'android') {
      console.warn('`setTranslucent` is only available on Android');
      return;
    }
    StatusBar._defaultProps.translucent = translucent;
    NativeStatusBarManagerAndroid.setTranslucent(translucent);
  }

  /**
   * Push a StatusBar entry onto the stack.
   * The return value should be passed to `popStackEntry` when complete.
   *
   * @param props Object containing the StatusBar props to use in the stack entry.
   */
  static pushStackEntry(props     )      {
    const entry = createStackEntry(props);
    StatusBar._propsStack.push(entry);
    StatusBar._updatePropsStack();
    return entry;
  }

  /**
   * Pop a StatusBar entry from the stack.
   *
   * @param entry Entry returned from `pushStackEntry`.
   */
  static popStackEntry(entry     ) {
    const index = StatusBar._propsStack.indexOf(entry);
    if (index !== -1) {
      StatusBar._propsStack.splice(index, 1);
    }
    StatusBar._updatePropsStack();
  }

  /**
   * Replace an existing StatusBar stack entry with new props.
   *
   * @param entry Entry returned from `pushStackEntry` to replace.
   * @param props Object containing the StatusBar props to use in the replacement stack entry.
   */
  static replaceStackEntry(entry     , props     )      {
    const newEntry = createStackEntry(props);
    const index = StatusBar._propsStack.indexOf(entry);
    if (index !== -1) {
      StatusBar._propsStack[index] = newEntry;
    }
    StatusBar._updatePropsStack();
    return newEntry;
  }

  static defaultProps    
                      
                                                  
     = {
    animated: false,
    showHideTransition: 'fade',
  };

  _stackEntry = null;

  componentDidMount() {
    // Every time a StatusBar component is mounted, we push it's prop to a stack
    // and always update the native status bar with the props from the top of then
    // stack. This allows having multiple StatusBar components and the one that is
    // added last or is deeper in the view hierarchy will have priority.
    this._stackEntry = StatusBar.pushStackEntry(this.props);
  }

  componentWillUnmount() {
    // When a StatusBar is unmounted, remove itself from the stack and update
    // the native bar with the next props.
    StatusBar.popStackEntry(this._stackEntry);
  }

  componentDidUpdate() {
    this._stackEntry = StatusBar.replaceStackEntry(
      this._stackEntry,
      this.props,
    );
  }

  /**
   * Updates the native status bar with the props from the stack.
   */
  static _updatePropsStack = () => {
    // Send the update to the native module only once at the end of the frame.
    clearImmediate(StatusBar._updateImmediate);
    StatusBar._updateImmediate = setImmediate(() => {
      const oldProps = StatusBar._currentValues;
      const mergedProps = mergePropsStack(
        StatusBar._propsStack,
        StatusBar._defaultProps,
      );

      // Update the props that have changed using the merged values from the props stack.
      if (Platform.OS === 'ios') {
        if (
          !oldProps ||
          oldProps.barStyle.value !== mergedProps.barStyle.value
        ) {
          NativeStatusBarManagerIOS.setStyle(
            mergedProps.barStyle.value,
            mergedProps.barStyle.animated || false,
          );
        }
        if (!oldProps || oldProps.hidden.value !== mergedProps.hidden.value) {
          NativeStatusBarManagerIOS.setHidden(
            mergedProps.hidden.value,
            mergedProps.hidden.animated
              ? mergedProps.hidden.transition
              : 'none',
          );
        }

        if (
          !oldProps ||
          oldProps.networkActivityIndicatorVisible !==
            mergedProps.networkActivityIndicatorVisible
        ) {
          NativeStatusBarManagerIOS.setNetworkActivityIndicatorVisible(
            mergedProps.networkActivityIndicatorVisible,
          );
        }
      } else if (Platform.OS === 'android') {
        //todo(T60684787): Add back optimization to only update bar style and
        //background color if the new value is different from the old value.
        NativeStatusBarManagerAndroid.setStyle(mergedProps.barStyle.value);
        const processedColor = processColor(mergedProps.backgroundColor.value);
        if (processedColor == null) {
          console.warn(
            `\`StatusBar._updatePropsStack\`: Color ${
              mergedProps.backgroundColor.value
            } parsed to null or undefined`,
          );
        } else {
          invariant(
            typeof processedColor === 'number',
            'Unexpected color given in StatusBar._updatePropsStack',
          );
          NativeStatusBarManagerAndroid.setColor(
            processedColor,
            mergedProps.backgroundColor.animated,
          );
        }
        if (!oldProps || oldProps.hidden.value !== mergedProps.hidden.value) {
          NativeStatusBarManagerAndroid.setHidden(mergedProps.hidden.value);
        }
        if (!oldProps || oldProps.translucent !== mergedProps.translucent) {
          NativeStatusBarManagerAndroid.setTranslucent(mergedProps.translucent);
        }
      }
      // Update the current prop values.
      StatusBar._currentValues = mergedProps;
    });
  };

  render()             {
    return null;
  }
}

module.exports = StatusBar;
