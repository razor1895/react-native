/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *       strict-local
 * @format
 */

'use strict';

const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const invariant = require('invariant');
const processColor = require('../../StyleSheet/processColor');

const nullthrows = require('nullthrows');
const setAndForwardRef = require('../../Utilities/setAndForwardRef');

import AndroidCheckBoxNativeComponent, {
  Commands as AndroidCheckBoxCommands,
} from './AndroidCheckBoxNativeComponent';

                                                     
                                                               
                                                                 

                                    
              
                   
                   
      
  

                               
               

     
                                                         
     
                                              

     
                                                       
     
                                             

     
                                                  
     
                   
    

                         
                 

     
                                                                        
                            
     
                   

     
                                                           
                            
     
                      

     
                                                
     
                                                                   

     
                                                                          
     
                                                           
    

/**
 * Renders a boolean input (Android only).
 *
 * This is a controlled component that requires an `onValueChange` callback that
 * updates the `value` prop in order for the component to reflect user actions.
 * If the `value` prop is not updated, the component will continue to render
 * the supplied `value` prop instead of the expected result of any user actions.
 *
 * ```
 * import React from 'react';
 * import { AppRegistry, StyleSheet, Text, View, CheckBox } from 'react-native';
 *
 * export default class App extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       checked: false
 *     }
 *   }
 *
 *   toggle() {
 *     this.setState(({checked}) => {
 *       return {
 *         checked: !checked
 *       };
 *     });
 *   }
 *
 *   render() {
 *     const {checked} = this.state;
 *     return (
 *       <View style={styles.container}>
 *         <Text>Checked</Text>
 *         <CheckBox value={checked} onChange={this.toggle.bind(this)} />
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     flexDirection: 'row',
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 *
 * // skip this line if using Create React Native App
 * AppRegistry.registerComponent('App', () => App);
 * ```
 *
 * @keyword checkbox
 * @keyword toggle
 */
class CheckBox extends React.Component        {
  _nativeRef                                                           = null;
  _setNativeRef = setAndForwardRef({
    getForwardedRef: () => this.props.forwardedRef,
    setLocalRef: ref => {
      this._nativeRef = ref;
    },
  });

  _onChange = (event               ) => {
    const value = this.props.value ?? false;
    AndroidCheckBoxCommands.setNativeValue(nullthrows(this._nativeRef), value);
    // Change the props after the native props are set in case the props
    // change removes the component
    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange &&
      this.props.onValueChange(event.nativeEvent.value);
  };

  _getTintColors(tintColors) {
    if (tintColors) {
      const processedTextColorTrue = processColor(tintColors.true);
      invariant(
        processedTextColorTrue == null ||
          typeof processedTextColorTrue === 'number',
        'Unexpected color given for tintColors.true',
      );
      const processedTextColorFalse = processColor(tintColors.true);
      invariant(
        processedTextColorFalse == null ||
          typeof processedTextColorFalse === 'number',
        'Unexpected color given for tintColors.false',
      );
      return {
        true: processedTextColorTrue,
        false: processedTextColorFalse,
      };
    } else {
      return undefined;
    }
  }

  render() {
    const {
      disabled: _,
      value: __,
      tintColors,
      style,
      forwardedRef,
      ...props
    } = this.props;
    const disabled = this.props.disabled ?? false;
    const value = this.props.value ?? false;

    const nativeProps = {
      ...props,
      onStartShouldSetResponder: () => true,
      onResponderTerminationRequest: () => false,
      enabled: !disabled,
      on: value,
      tintColors: this._getTintColors(tintColors),
      style: [styles.rctCheckBox, style],
    };
    return (
      <AndroidCheckBoxNativeComponent
        {...nativeProps}
        ref={this._setNativeRef}
        onChange={this._onChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  rctCheckBox: {
    height: 32,
    width: 32,
  },
});

                                            
        
                                                          
  

const CheckBoxWithRef = React.forwardRef 
        
                                                          
 (function CheckBoxWithRef(props, ref) {
  return <CheckBox {...props} forwardedRef={ref} />;
});

module.exports = (CheckBoxWithRef              );
