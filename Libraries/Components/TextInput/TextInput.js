/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 * @format
 */

'use strict';

const DeprecatedTextInputPropTypes = require('../../DeprecatedPropTypes/DeprecatedTextInputPropTypes');
const Platform = require('../../Utilities/Platform');
const React = require('react');
const ReactNative = require('../../Renderer/shims/ReactNative');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const Text = require('../../Text/Text');
const TextAncestor = require('../../Text/TextAncestor');
const TextInputState = require('./TextInputState');
const TouchableWithoutFeedback = require('../Touchable/TouchableWithoutFeedback');

const invariant = require('invariant');
const nullthrows = require('nullthrows');
const setAndForwardRef = require('../../Utilities/setAndForwardRef');

                                                                              
                                                                 
                                                     
                                                                            
                                                           
                                                                         
                                                                       

const {useEffect, useRef, useState} = React;

                                                                               

let AndroidTextInput;
let AndroidTextInputCommands;
let RCTSinglelineTextInputView;
let RCTSinglelineTextInputNativeCommands;
let RCTMultilineTextInputView;
let RCTMultilineTextInputNativeCommands;

if (Platform.OS === 'android') {
  AndroidTextInput = require('./AndroidTextInputNativeComponent').default;
  AndroidTextInputCommands = require('./AndroidTextInputNativeComponent')
    .Commands;
} else if (Platform.OS === 'ios') {
  RCTSinglelineTextInputView = require('./RCTSingelineTextInputNativeComponent')
    .default;
  RCTSinglelineTextInputNativeCommands = require('./RCTSingelineTextInputNativeComponent')
    .Commands;
  RCTMultilineTextInputView = require('./RCTMultilineTextInputNativeComponent')
    .default;
  RCTMultilineTextInputNativeCommands = require('./RCTMultilineTextInputNativeComponent')
    .Commands;
}

                                         
              
                       
                   
                 
      
  

                                            
              
                       
                         
                       
                    
                  
        
                   
                 
      
  

                                                    
              
                   
                             
                    
                     
        
      
  

                                  
              
                   
      
  

                                    
                                     

                             
                
              
    

                                                  
              
                         
                   
      
  

                                           
              
                
                     
                         
      
  

                                          
              
                       
                 
                   
      
  

                            
                 
          
             
                   
          
          

                          
                   
             
                   
             
               
                
                 
             
                   
                             
         
                    
             
                
                 
                              
                 
                       

                           
                   
          
        
          
            
          
                 
          
              
             
             
                    
            
          
           
            

                                                                           

                             
          
         
                 
                         
                  
                 
                      
                  
                
                       
               
              
              
                
          
                
                
              
                      
                
                        
                        
                 
                     
              
              
                 
                  

                            

                            
     
                                                                  
                                                       
                  
     
                        

     
                                          
                  
     
                                                       

     
                                                                              
                                                                               
                  
     
                                           

     
                                                                            
                                                                         
                  
     
                                                                               

     
                                                                        
                  
     
                              

     
                                                                                
                                                             
                                           
    
                                                        
    
                                                 
    
                      
               
                  
                        
               
              
    
                  
     
                     
                            
                                            

     
                                                                      
                                                                  
                                              
                  
     
                                 

     
                                                           
                                                                
                  
     
                                     

     
                                     
                                                                                                                                                                                                        
                                                                                           
                  
     
                                 

    
                                                                              
                                                                      
                                          
                                                                                  
                  
     
                                        

     
                                                             
                                                                         
                  
     
                           
    

                                
     
                                                                          
                                         
    
                   
    
                                               
    
                 
                 
              
             
            
                       
                    
                  
               
               
                     
                    
            
    
                      
     
                       
              
              
                    
                   
                 
             
            
                
                   
                      
           
                
           
    

     
                                                                         
                      
     
                           

     
                                                                             
                                         
                      
     
                          

     
                                                                                    
                                                                                     
                                                                                   
                                                                                    
                         
                      
     
                                 

     
                                                                                                              
                                   
                      
     
                                                               

     
                                            
                      
     
                                      

     
                                                                          
                                                                                          
         
        
               
                                   
       
        
                      
     
                            

     
                                                                         
                      
     
                               

                           
            
          
                            
           
                             
    

     
                                                                                            
                        
                      
     
                                  
    

                                
                                                            
              
                  

     
                                                                         
    
                                    
                                          
                                                              
                                              
     
                                   

     
                                                                    
     
                         

     
                                                         
                                  
     
                       

     
                                                                                          
                       
     
                              

     
                                                                                          
                     
                                                                                       
                                              
                                                                      
     
                                  

     
                                                                   
     
                      

     
                                                      
    
                                                
    
                
                
                   
                    
                      
                  
    
               
    
                                           
    
                      
                                
            
                       
                
                   
    
                   
    
                                               
    
                         
    
                                                                              
                                                                                    
     
                               

     
                                                                           
                      
    
                     
    
                                                
    
             
           
             
               
             
    
                   
    
                                               
    
             
                 
    
               
    
                                           
    
                
                       
               
             
              
              
     
                                 

     
                                                                          
                                                              
     
                      

     
                                                     
                                  
     
                       

     
                                                            
     
                                    

     
                                                            
     
                                      

     
                                                                
     
                                        

     
                                                                
                                                                   
     
                                          

     
                                                                        
                             
                                                           
    
                                           
     
                                                              

     
                                                  
     
                                             

     
                                                                      
                             
                                                      
     
                                                          

     
                                                                            
                                                
     
                                                

     
                                                   
                                                                  
                                                                           
                                                                
                                       
     
                                            

     
                                                                                   
                                                                                  
                                             
     
                                        

     
                                                                         
     
                           

     
                                              
     
                                     

     
                                                                               
                                                                                                     
     
                             

     
                                                      
     
                               

     
                                                                          
                                           
     
                           
                  
                  
      

     
                                                                      
                                                                         
                                                                         
                                                                           
                                                                             
                                                                        
                                    
     
                     

     
                                                                            
                                                                             
                                                                                
     
                            

     
                                                                 
     
                               

     
                                                        
                                                                   
                                                                             
                                                                             
                                                                           
     
                          

     
                                                                                                       
    
                        
                       
                         
                          
                            
                             
                                
                               
    
                                                                           
                     
    
                              
     
                         

     
                                                              
                                                                                
     
                         

    
                                                                          
     
                               

                                 
                                                               
    
    

                                     
                    
                           
                                                              
    

const emptyFunctionThatReturnsTrue = () => true;

/**
 * A foundational component for inputting text into the app via a
 * keyboard. Props provide configurability for several features, such as
 * auto-correction, auto-capitalization, placeholder text, and different keyboard
 * types, such as a numeric keypad.
 *
 * The simplest use case is to plop down a `TextInput` and subscribe to the
 * `onChangeText` events to read the user input. There are also other events,
 * such as `onSubmitEditing` and `onFocus` that can be subscribed to. A simple
 * example:
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react';
 * import { AppRegistry, TextInput } from 'react-native';
 *
 * export default class UselessTextInput extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = { text: 'Useless Placeholder' };
 *   }
 *
 *   render() {
 *     return (
 *       <TextInput
 *         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
 *         onChangeText={(text) => this.setState({text})}
 *         value={this.state.text}
 *       />
 *     );
 *   }
 * }
 *
 * // skip this line if using Create React Native App
 * AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
 * ```
 *
 * Two methods exposed via the native element are .focus() and .blur() that
 * will focus or blur the TextInput programmatically.
 *
 * Note that some props are only available with `multiline={true/false}`.
 * Additionally, border styles that apply to only one side of the element
 * (e.g., `borderBottomColor`, `borderLeftWidth`, etc.) will not be applied if
 * `multiline=false`. To achieve the same effect, you can wrap your `TextInput`
 * in a `View`:
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react';
 * import { AppRegistry, View, TextInput } from 'react-native';
 *
 * class UselessTextInput extends Component {
 *   render() {
 *     return (
 *       <TextInput
 *         {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
 *         editable = {true}
 *         maxLength = {40}
 *       />
 *     );
 *   }
 * }
 *
 * export default class UselessTextInputMultiline extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       text: 'Useless Multiline Placeholder',
 *     };
 *   }
 *
 *   // If you type something in the text box that is a color, the background will change to that
 *   // color.
 *   render() {
 *     return (
 *      <View style={{
 *        backgroundColor: this.state.text,
 *        borderBottomColor: '#000000',
 *        borderBottomWidth: 1 }}
 *      >
 *        <UselessTextInput
 *          multiline = {true}
 *          numberOfLines = {4}
 *          onChangeText={(text) => this.setState({text})}
 *          value={this.state.text}
 *        />
 *      </View>
 *     );
 *   }
 * }
 *
 * // skip these lines if using Create React Native App
 * AppRegistry.registerComponent(
 *  'AwesomeProject',
 *  () => UselessTextInputMultiline
 * );
 * ```
 *
 * `TextInput` has by default a border at the bottom of its view. This border
 * has its padding set by the background image provided by the system, and it
 * cannot be changed. Solutions to avoid this is to either not set height
 * explicitly, case in which the system will take care of displaying the border
 * in the correct position, or to not display the border by setting
 * `underlineColorAndroid` to transparent.
 *
 * Note that on Android performing text selection in input can change
 * app's activity `windowSoftInputMode` param to `adjustResize`.
 * This may cause issues with components that have position: 'absolute'
 * while keyboard is active. To avoid this behavior either specify `windowSoftInputMode`
 * in AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html )
 * or control this param programmatically with native code.
 *
 */
function InternalTextInput(props       )             {
  const inputRef = useRef                                               (null);

  // Android sends a "onTextChanged" event followed by a "onSelectionChanged" event, for
  // the same "most recent event count".
  // For controlled selection, that means that immediately after text is updated,
  // a controlled component will pass in the *previous* selection, even if the controlled
  // component didn't mean to modify the selection at all.
  // Therefore, we ignore selections and pass them through until the selection event has
  // been sent.
  // Note that this mitigation is NOT needed for Fabric.
  let selection             =
    props.selection == null
      ? null
      : {
          start: props.selection.start,
          end: props.selection.end ?? props.selection.start,
        };

  const [mostRecentEventCount, setMostRecentEventCount] = useState        (0);

  const [lastNativeText, setLastNativeText] = useState            (props.value);
  const [lastNativeSelectionState, setLastNativeSelection] = useState   
                          
                                 
     ({selection, mostRecentEventCount});

  const lastNativeSelection = lastNativeSelectionState.selection;
  const lastNativeSelectionEventCount =
    lastNativeSelectionState.mostRecentEventCount;

  if (lastNativeSelectionEventCount < mostRecentEventCount) {
    selection = null;
  }

  let viewCommands                                             ;
  if (AndroidTextInputCommands) {
    viewCommands = AndroidTextInputCommands;
  } else {
    viewCommands = props.multiline
      ? RCTMultilineTextInputNativeCommands
      : RCTSinglelineTextInputNativeCommands;
  }

  const text =
    typeof props.value === 'string'
      ? props.value
      : typeof props.defaultValue === 'string'
      ? props.defaultValue
      : '';

  // This is necessary in case native updates the text and JS decides
  // that the update should be ignored and we should stick with the value
  // that we have in JS.
  useEffect(() => {
    const nativeUpdate = {};

    if (lastNativeText !== props.value && typeof props.value === 'string') {
      nativeUpdate.text = props.value;
      setLastNativeText(props.value);
    }

    if (
      selection &&
      lastNativeSelection &&
      (lastNativeSelection.start !== selection.start ||
        lastNativeSelection.end !== selection.end)
    ) {
      nativeUpdate.selection = selection;
      setLastNativeSelection({selection, mostRecentEventCount});
    }

    if (Object.keys(nativeUpdate).length === 0) {
      return;
    }

    if (inputRef.current != null) {
      viewCommands.setTextAndSelection(
        inputRef.current,
        mostRecentEventCount,
        text,
        selection?.start ?? -1,
        selection?.end ?? -1,
      );
    }
  }, [
    mostRecentEventCount,
    inputRef,
    props.value,
    props.defaultValue,
    lastNativeText,
    selection,
    lastNativeSelection,
    text,
    viewCommands,
  ]);

  useEffect(() => {
    const inputRefValue = inputRef.current;

    if (inputRefValue != null) {
      TextInputState.registerInput(inputRefValue);

      return () => {
        TextInputState.unregisterInput(inputRefValue);
      };
    }
  }, [inputRef]);

  useEffect(() => {
    // When unmounting we need to blur the input
    return () => {
      if (isFocused()) {
        nullthrows(inputRef.current).blur();
      }
    };
  }, [inputRef]);

  function clear()       {
    if (inputRef.current != null) {
      viewCommands.setTextAndSelection(
        inputRef.current,
        mostRecentEventCount,
        '',
        0,
        0,
      );
    }
  }

  // TODO: Fix this returning true on null === null, when no input is focused
  function isFocused()          {
    return TextInputState.currentlyFocusedInput() === inputRef.current;
  }

  function getNativeRef()                                          {
    return inputRef.current;
  }

  const _setNativeRef = setAndForwardRef({
    getForwardedRef: () => props.forwardedRef,
    setLocalRef: ref => {
      inputRef.current = ref;

      /*
        Hi reader from the future. I'm sorry for this.

        This is a hack. Ideally we would forwardRef to the underlying
        host component. However, since TextInput has it's own methods that can be
        called as well, if we used the standard forwardRef then these
        methods wouldn't be accessible and thus be a breaking change.

        We have a couple of options of how to handle this:
        - Return a new ref with everything we methods from both. This is problematic
          because we need React to also know it is a host component which requires
          internals of the class implementation of the ref.
        - Break the API and have some other way to call one set of the methods or
          the other. This is our long term approach as we want to eventually
          get the methods on host components off the ref. So instead of calling
          ref.measure() you might call ReactNative.measure(ref). This would hopefully
          let the ref for TextInput then have the methods like `.clear`. Or we do it
          the other way and make it TextInput.clear(textInputRef) which would be fine
          too. Either way though is a breaking change that is longer term.
        - Mutate this ref. :( Gross, but accomplishes what we need in the meantime
          before we can get to the long term breaking change.
        */
      if (ref) {
        ref.clear = clear;
        ref.isFocused = isFocused;
        ref.getNativeRef = getNativeRef;
      }
    },
  });

  const _onPress = (event            ) => {
    if (props.editable || props.editable === undefined) {
      nullthrows(inputRef.current).focus();
    }
  };

  const _onChange = (event             ) => {
    const text = event.nativeEvent.text;
    props.onChange && props.onChange(event);
    props.onChangeText && props.onChangeText(text);

    if (inputRef.current == null) {
      // calling `props.onChange` or `props.onChangeText`
      // may clean up the input itself. Exits here.
      return;
    }

    setLastNativeText(text);
    // This must happen last, after we call setLastNativeText.
    // Different ordering can cause bugs when editing AndroidTextInputs
    // with multiple Fragments.
    // We must update this so that controlled input updates work.
    setMostRecentEventCount(event.nativeEvent.eventCount);
  };

  const _onSelectionChange = (event                      ) => {
    props.onSelectionChange && props.onSelectionChange(event);

    if (inputRef.current == null) {
      // calling `props.onSelectionChange`
      // may clean up the input itself. Exits here.
      return;
    }

    setLastNativeSelection({
      selection: event.nativeEvent.selection,
      mostRecentEventCount,
    });
  };

  const _onFocus = (event            ) => {
    TextInputState.focusInput(inputRef.current);
    if (props.onFocus) {
      props.onFocus(event);
    }
  };

  const _onBlur = (event           ) => {
    TextInputState.blurInput(inputRef.current);
    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  const _onScroll = (event             ) => {
    props.onScroll && props.onScroll(event);
  };

  let textInput = null;
  let additionalTouchableProps    
                                               
            
                                   
      
                                                              
     = {...null};

  if (Platform.OS === 'ios') {
    const RCTTextInputView = props.multiline
      ? RCTMultilineTextInputView
      : RCTSinglelineTextInputView;

    const style = props.multiline
      ? [styles.multilineInput, props.style]
      : props.style;

    additionalTouchableProps.rejectResponderTermination =
      props.rejectResponderTermination;

    textInput = (
      <RCTTextInputView
        ref={_setNativeRef}
        {...props}
        dataDetectorTypes={props.dataDetectorTypes}
        mostRecentEventCount={mostRecentEventCount}
        onBlur={_onBlur}
        onChange={_onChange}
        onContentSizeChange={props.onContentSizeChange}
        onFocus={_onFocus}
        onScroll={_onScroll}
        onSelectionChange={_onSelectionChange}
        onSelectionChangeShouldSetResponder={emptyFunctionThatReturnsTrue}
        selection={selection}
        style={style}
        text={text}
      />
    );
  } else if (Platform.OS === 'android') {
    const style = [props.style];
    const autoCapitalize = props.autoCapitalize || 'sentences';
    let children = props.children;
    let childCount = 0;
    React.Children.forEach(children, () => ++childCount);
    invariant(
      !(props.value && childCount),
      'Cannot specify both value and children.',
    );
    if (childCount > 1) {
      children = <Text>{children}</Text>;
    }

    textInput = (
      /* $FlowFixMe the types for AndroidTextInput don't match up exactly with
        the props for TextInput. This will need to get fixed */
      <AndroidTextInput
        ref={_setNativeRef}
        {...props}
        autoCapitalize={autoCapitalize}
        children={children}
        disableFullscreenUI={props.disableFullscreenUI}
        mostRecentEventCount={mostRecentEventCount}
        onBlur={_onBlur}
        onChange={_onChange}
        onFocus={_onFocus}
        /* $FlowFixMe the types for AndroidTextInput don't match up exactly
         * with the props for TextInput. This will need to get fixed */
        onScroll={_onScroll}
        onSelectionChange={_onSelectionChange}
        selection={selection}
        style={style}
        text={text}
        textBreakStrategy={props.textBreakStrategy}
      />
    );
  }
  return (
    <TextAncestor.Provider value={true}>
      <TouchableWithoutFeedback
        onLayout={props.onLayout}
        onPress={_onPress}
        accessible={props.accessible}
        accessibilityLabel={props.accessibilityLabel}
        accessibilityRole={props.accessibilityRole}
        accessibilityState={props.accessibilityState}
        nativeID={props.nativeID}
        testID={props.testID}
        {...additionalTouchableProps}>
        {textInput}
      </TouchableWithoutFeedback>
    </TextAncestor.Provider>
  );
}

const ExportedForwardRef                          
                                                
                                                             
  = React.forwardRef(function TextInput(
  props,
  forwardedRef                 
                                                               
   ,
) {
  return <InternalTextInput {...props} forwardedRef={forwardedRef} />;
});

// $FlowFixMe
ExportedForwardRef.defaultProps = {
  allowFontScaling: true,
  rejectResponderTermination: true,
  underlineColorAndroid: 'transparent',
};

// TODO: Deprecate this
// $FlowFixMe
ExportedForwardRef.propTypes = DeprecatedTextInputPropTypes;

// $FlowFixMe
ExportedForwardRef.State = {
  currentlyFocusedInput: TextInputState.currentlyFocusedInput,

  currentlyFocusedField: TextInputState.currentlyFocusedField,
  focusTextInput: TextInputState.focusTextInput,
  blurTextInput: TextInputState.blurTextInput,
};

                                             
                     
                                                                       
                                                                       
                                                         
                                                       
      
                                                 
    

const styles = StyleSheet.create({
  multilineInput: {
    // This default top inset makes RCTMultilineTextInputView seem as close as possible
    // to single-line RCTSinglelineTextInputView defaults, using the system defaults
    // of font size 17 and a height of 31 points.
    paddingTop: 5,
  },
});

module.exports = ((ExportedForwardRef     )                          
                                                
              
                                              
                         
      
   
                           );
