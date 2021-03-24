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

import * as React from 'react';
import {useMemo, useState, useRef, useImperativeHandle} from 'react';
import useAndroidRippleForView, {
                    
} from './useAndroidRippleForView';
             
                           
                          
                    
                     
                     
                                   
import {PressabilityDebugView} from '../../Pressability/PressabilityDebug';
import usePressability from '../../Pressability/usePressability';
import {normalizeRect,                } from '../../StyleSheet/Rect';
                                                                 
                                                                        
import View from '../View/View';

                                                                             

                                            
                   
    

                         
     
                   
     
                                                                  
                                         
                                 
                                              
                                  
                                                               
                                         
                                           
                                           
                                      
                        
                       
                                                                               
                                                                      

     
                                                                                
                                        
     
                                                                    

     
                                                                                
     
                           

     
                                            
     
                      

     
                                                                           
     
                        

     
                                                                              
                                            
     
                                     

     
                                            
     
                                           

     
                                                
     
                                             

     
                                                  
     
                                         

     
                                                     
     
                                           

     
                                                      
     
                                            

     
                                                                                
                                                                
     
                                                                        

     
                                                
     
                   

     
                                                 
     
                                  

     
                                                                
     
                                 

     
                                                                    
     
                              
    

/**
 * Component used to build display components that should respond to whether the
 * component is currently pressed or not.
 */
function Pressable(props       , forwardedRef)             {
  const {
    accessible,
    android_disableSound,
    android_ripple,
    children,
    delayLongPress,
    disabled,
    focusable,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    pressRetentionOffset,
    style,
    testOnly_pressed,
    ...restProps
  } = props;

  const viewRef = useRef                                      (null);
  useImperativeHandle(forwardedRef, () => viewRef.current);

  const android_rippleConfig = useAndroidRippleForView(android_ripple, viewRef);

  const [pressed, setPressed] = usePressState(testOnly_pressed === true);

  const hitSlop = normalizeRect(props.hitSlop);

  const config = useMemo(
    () => ({
      disabled,
      hitSlop,
      pressRectOffset: pressRetentionOffset,
      android_disableSound,
      delayLongPress,
      onLongPress,
      onPress,
      onPressIn(event            )       {
        if (android_rippleConfig != null) {
          android_rippleConfig.onPressIn(event);
        }
        setPressed(true);
        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressMove: android_rippleConfig?.onPressMove,
      onPressOut(event            )       {
        if (android_rippleConfig != null) {
          android_rippleConfig.onPressOut(event);
        }
        setPressed(false);
        if (onPressOut != null) {
          onPressOut(event);
        }
      },
    }),
    [
      android_disableSound,
      android_rippleConfig,
      delayLongPress,
      disabled,
      hitSlop,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      pressRetentionOffset,
      setPressed,
    ],
  );
  const eventHandlers = usePressability(config);

  return (
    <View
      {...restProps}
      {...eventHandlers}
      {...android_rippleConfig?.viewProps}
      accessible={accessible !== false}
      focusable={focusable !== false}
      hitSlop={hitSlop}
      ref={viewRef}
      style={typeof style === 'function' ? style({pressed}) : style}>
      {typeof children === 'function' ? children({pressed}) : children}
      {__DEV__ ? <PressabilityDebugView color="red" hitSlop={hitSlop} /> : null}
    </View>
  );
}

function usePressState(forcePressed         )                               {
  const [pressed, setPressed] = useState(false);
  return [pressed || forcePressed, setPressed];
}

const MemoedPressable = React.memo(React.forwardRef(Pressable));
MemoedPressable.displayName = 'Pressable';

export default (MemoedPressable                          
        
                                
 );
