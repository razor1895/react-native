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

const Platform = require('../../Utilities/Platform');
import SliderNativeComponent from './SliderNativeComponent';
const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');

                                                         
                                                               
                                                                 
                                                     
                                                               

                            
              
                  
       
                    
       
                       
      
  

                            
     
                                                                            
                                                                       
     
                            

     
                                                                         
                                                                      
     
                                   

     
                                                                         
                                                                     
     
                                   

     
                                                                   
     
                            
    

                         
               
              

     
                                                                    
                                                     
     
                         

     
                                                                          
                                                             
                        
    
                                                                       
                           
     
                  

     
                                                  
                                                 
                        
     
                 

     
                                                             
     
                         

     
                                                             
     
                         

     
                                                            
                                                      
     
                                      

     
                                                             
                                                      
     
                                      
     
                                                                   
                                                    
     
                               

     
                                                       
                            
     
                      

     
                                                                        
     
                                           

     
                                                               
                                                                     
                                            
     
                                               

     
                                                     
     
                   
    

/**
 * A component used to select a single value from a range of values.
 *
 * ### Usage
 *
 * The example below shows how to use `Slider` to change
 * a value used by `Text`. The value is stored using
 * the state of the root component (`App`). The same component
 * subscribes to the `onValueChange`  of `Slider` and changes
 * the value using `setState`.
 *
 *```
 * import React from 'react';
 * import { StyleSheet, Text, View, Slider } from 'react-native';
 *
 * export default class App extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       value: 50
 *     }
 *   }
 *
 *   change(value) {
 *     this.setState(() => {
 *       return {
 *         value: parseFloat(value)
 *       };
 *     });
 *   }
 *
 *   render() {
 *     const {value} = this.state;
 *     return (
 *       <View style={styles.container}>
 *         <Text style={styles.text}>{String(value)}</Text>
 *         <Slider
 *           step={1}
 *           maximumValue={100}
 *           onValueChange={this.change.bind(this)}
 *           value={value} />
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     flexDirection: 'column',
 *     justifyContent: 'center'
 *   },
 *   text: {
 *     fontSize: 50,
 *     textAlign: 'center'
 *   }
 * });
 *```
 *
 */
const Slider = (
  props       ,
  forwardedRef                                           ,
) => {
  const style = StyleSheet.compose(
    styles.slider,
    props.style,
  );

  const {
    disabled = false,
    value = 0.5,
    minimumValue = 0,
    maximumValue = 1,
    step = 0,
    onValueChange,
    onSlidingComplete,
    ...localProps
  } = props;

  const onValueChangeEvent = onValueChange
    ? (event       ) => {
        let userEvent = true;
        if (Platform.OS === 'android') {
          // On Android there's a special flag telling us the user is
          // dragging the slider.
          userEvent =
            event.nativeEvent.fromUser != null && event.nativeEvent.fromUser;
        }
        userEvent && onValueChange(event.nativeEvent.value);
      }
    : null;

  const onChangeEvent = onValueChangeEvent;
  const onSlidingCompleteEvent = onSlidingComplete
    ? (event       ) => {
        onSlidingComplete(event.nativeEvent.value);
      }
    : null;

  return (
    <SliderNativeComponent
      {...localProps}
      // TODO: Reconcile these across the two platforms.
      enabled={!disabled}
      disabled={disabled}
      maximumValue={maximumValue}
      minimumValue={minimumValue}
      onChange={onChangeEvent}
      onResponderTerminationRequest={() => false}
      onSlidingComplete={onSlidingCompleteEvent}
      onStartShouldSetResponder={() => true}
      onValueChange={onValueChangeEvent}
      ref={forwardedRef}
      step={step}
      style={style}
      value={value}
    />
  );
};

const SliderWithRef                          
        
                                                 
  = React.forwardRef(Slider);

let styles;
if (Platform.OS === 'ios') {
  styles = StyleSheet.create({
    slider: {
      height: 40,
    },
  });
} else {
  styles = StyleSheet.create({
    slider: {},
  });
}

module.exports = SliderWithRef;
