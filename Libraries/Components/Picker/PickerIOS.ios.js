/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *       strict-local
 */

// This is a controlled component version of RCTPickerIOS.

'use strict';

const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const View = require('../View/View');

const invariant = require('invariant');
const processColor = require('../../StyleSheet/processColor');

import RCTPickerNativeComponent, {
  Commands as PickerCommands,
} from './RCTPickerNativeComponent';
                                                               
                                                                 
                                                                       
                                                               
                                                     

                                           
              
                              
                     
      
  

                                        
                
                            
                                  
    

                                

                         
               
                                                                     
                             
                                                     
                                                                            
                                    
                               
    

               
                        
                                              
   

                             
                
                             
                      
    

const PickerIOSItem = (props           )       => {
  return null;
};

class PickerIOS extends React.Component               {
  _picker                                                     = null;
  _lastNativeValue         ;

  state        = {
    selectedIndex: 0,
    items: [],
  };

  static Item                             = PickerIOSItem;

  static getDerivedStateFromProps(props       )        {
    let selectedIndex = 0;
    const items = [];
    React.Children.toArray(props.children)
      .filter(child => child !== null)
      .forEach(function(child, index) {
        if (child.props.value === props.selectedValue) {
          selectedIndex = index;
        }
        const processedTextColor = processColor(child.props.color);
        invariant(
          processedTextColor == null || typeof processedTextColor === 'number',
          'Unexpected color given for PickerIOSItem color',
        );
        items.push({
          value: child.props.value,
          label: child.props.label,
          textColor: processedTextColor,
        });
      });
    return {selectedIndex, items};
  }

  render()             {
    return (
      <View style={this.props.style}>
        <RCTPickerNativeComponent
          ref={picker => {
            this._picker = picker;
          }}
          testID={this.props.testID}
          style={[styles.pickerIOS, this.props.itemStyle]}
          items={this.state.items}
          selectedIndex={this.state.selectedIndex}
          onChange={this._onChange}
          accessibilityLabel={this.props.accessibilityLabel}
        />
      </View>
    );
  }

  componentDidUpdate() {
    // This is necessary in case native updates the picker and JS decides
    // that the update should be ignored and we should stick with the value
    // that we have in JS.
    if (
      this._picker &&
      this._lastNativeValue !== undefined &&
      this._lastNativeValue !== this.state.selectedIndex
    ) {
      PickerCommands.setNativeSelectedIndex(
        this._picker,
        this.state.selectedIndex,
      );
    }
  }

  _onChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    if (this.props.onValueChange) {
      this.props.onValueChange(
        event.nativeEvent.newValue,
        event.nativeEvent.newIndex,
      );
    }

    this._lastNativeValue = event.nativeEvent.newIndex;
    this.forceUpdate();
  };
}

const styles = StyleSheet.create({
  pickerIOS: {
    // The picker will conform to whatever width is given, but we do
    // have to set the component's height explicitly on the
    // surrounding view to ensure it gets rendered.
    height: 216,
  },
});

module.exports = PickerIOS;
