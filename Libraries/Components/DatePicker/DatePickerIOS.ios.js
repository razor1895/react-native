/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *       strict-local
 */

// This is a controlled component version of RCTDatePickerIOS.

'use strict';

import RCTDatePickerNativeComponent, {
  Commands as DatePickerCommands,
} from './RCTDatePickerNativeComponent';
const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const View = require('../View/View');

const invariant = require('invariant');

                                                               
                                                     

                            
              
                      
      
  

                         
               

     
                                 
     
               

     
                                                                              
                                                                            
                                                                    
                                                                        
                                                                              
                                                    
     
                      

     
                            
     
                   

     
                  
    
                                                      
     
                      

     
                  
    
                                                      
     
                      

     
                                                   
     
                                                                     

     
                          
     
                                         

     
                         
    
                                                                     
                                                                             
                                              
     
                                     

     
                         
    
                                                                     
                                                                      
                   
     
                                     

     
                                
    
                                                                          
                                                                      
                                                                    
     
                                    
    

/**
 * Use `DatePickerIOS` to render a date/time picker (selector) on iOS.  This is
 * a controlled component, so you must hook in to the `onDateChange` callback
 * and update the `date` prop in order for the component to update, otherwise
 * the user's change will be reverted immediately to reflect `props.date` as the
 * source of truth.
 */
class DatePickerIOS extends React.Component        {
  static DefaultProps                                          = {
    mode: 'datetime',
  };

  _picker                                                         = null;

  componentDidUpdate() {
    if (this.props.date) {
      const propsTimeStamp = this.props.date.getTime();
      if (this._picker) {
        DatePickerCommands.setNativeDate(this._picker, propsTimeStamp);
      }
    }
  }

  _onChange = (event       ) => {
    const nativeTimeStamp = event.nativeEvent.timestamp;
    this.props.onDateChange &&
      this.props.onDateChange(new Date(nativeTimeStamp));
    this.props.onChange && this.props.onChange(event);
    this.forceUpdate();
  };

  render()             {
    const props = this.props;
    invariant(
      props.date || props.initialDate,
      'A selected date or initial date should be specified.',
    );
    return (
      <View style={props.style}>
        <RCTDatePickerNativeComponent
          testID={props.testID}
          ref={picker => {
            this._picker = picker;
          }}
          style={styles.datePickerIOS}
          date={
            props.date
              ? props.date.getTime()
              : props.initialDate
              ? props.initialDate.getTime()
              : undefined
          }
          locale={
            props.locale != null && props.locale !== ''
              ? props.locale
              : undefined
          }
          maximumDate={
            props.maximumDate ? props.maximumDate.getTime() : undefined
          }
          minimumDate={
            props.minimumDate ? props.minimumDate.getTime() : undefined
          }
          mode={props.mode}
          minuteInterval={props.minuteInterval}
          timeZoneOffsetInMinutes={props.timeZoneOffsetInMinutes}
          onChange={this._onChange}
          onStartShouldSetResponder={() => true}
          onResponderTerminationRequest={() => false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePickerIOS: {
    height: 216,
  },
});

module.exports = DatePickerIOS;
