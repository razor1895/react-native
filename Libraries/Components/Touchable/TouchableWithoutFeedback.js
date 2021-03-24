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

import Pressability, {
                          
} from '../../Pressability/Pressability';
import {PressabilityDebugView} from '../../Pressability/PressabilityDebug';
import TVTouchable from './TVTouchable';
             
                           
                          
                    
                     
                     
                                                 
                                                                        
             
            
             
              
             
                                    
import Platform from '../../Utilities/Platform';
import View from '../../Components/View/View';
import * as React from 'react';

                         
                                                                  
                                         
                                 
                                              
                                  
                                                               
                                         
                                           
                                           
                                      
                        
                         
                           
                         
                          
                      
                       
                            
                                                                               
                     
                                                                      
                                        
                                          
                                            
                                              
                                          
                                            
                                             
                                         
                                        
                   
                                
    

                         
                             
    

const PASSTHROUGH_PROPS = [
  'accessibilityActions',
  'accessibilityElementsHidden',
  'accessibilityHint',
  'accessibilityIgnoresInvertColors',
  'accessibilityLabel',
  'accessibilityLiveRegion',
  'accessibilityRole',
  'accessibilityState',
  'accessibilityValue',
  'accessibilityViewIsModal',
  'hitSlop',
  'importantForAccessibility',
  'nativeID',
  'onAccessibilityAction',
  'onBlur',
  'onFocus',
  'onLayout',
  'testID',
];

class TouchableWithoutFeedback extends React.Component               {
  _tvTouchable              ;

  state        = {
    pressability: new Pressability(createPressabilityConfig(this.props)),
  };

  render()             {
    const element = React.Children.only(this.props.children);
    const children = [element.props.children];
    if (__DEV__) {
      if (element.type === View) {
        children.push(
          <PressabilityDebugView color="red" hitSlop={this.props.hitSlop} />,
        );
      }
    }

    // BACKWARD-COMPATIBILITY: Focus and blur events were never supported before
    // adopting `Pressability`, so preserve that behavior.
    const {
      onBlur,
      onFocus,
      ...eventHandlersWithoutBlurAndFocus
    } = this.state.pressability.getEventHandlers();

    const elementProps                         = {
      ...eventHandlersWithoutBlurAndFocus,
      accessible: this.props.accessible !== false,
      focusable:
        this.props.focusable !== false && this.props.onPress !== undefined,
    };
    for (const prop of PASSTHROUGH_PROPS) {
      if (this.props[prop] !== undefined) {
        elementProps[prop] = this.props[prop];
      }
    }

    return React.cloneElement(element, elementProps, ...children);
  }

  componentDidMount()       {
    if (Platform.isTV) {
      this._tvTouchable = new TVTouchable(this, {
        getDisabled: () => this.props.disabled === true,
        onBlur: event => {
          if (this.props.onBlur != null) {
            this.props.onBlur(event);
          }
        },
        onFocus: event => {
          if (this.props.onFocus != null) {
            this.props.onFocus(event);
          }
        },
        onPress: event => {
          if (this.props.onPress != null) {
            this.props.onPress(event);
          }
        },
      });
    }
  }

  componentDidUpdate()       {
    this.state.pressability.configure(createPressabilityConfig(this.props));
  }

  componentWillUnmount()       {
    if (Platform.isTV) {
      if (this._tvTouchable != null) {
        this._tvTouchable.destroy();
      }
    }
    this.state.pressability.reset();
  }
}

function createPressabilityConfig(props       )                     {
  return {
    cancelable: !props.rejectResponderTermination,
    disabled: props.disabled,
    hitSlop: props.hitSlop,
    delayLongPress: props.delayLongPress,
    delayPressIn: props.delayPressIn,
    delayPressOut: props.delayPressOut,
    minPressDuration: 0,
    pressRectOffset: props.pressRetentionOffset,
    android_disableSound: props.touchSoundDisabled,
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    onLongPress: props.onLongPress,
    onPress: props.onPress,
    onPressIn: props.onPressIn,
    onPressOut: props.onPressOut,
  };
}

module.exports = TouchableWithoutFeedback;
