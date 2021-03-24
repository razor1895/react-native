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

const NativeAnimatedHelper = require('../NativeAnimatedHelper');

                                                        

                                                 
                                                      

                               
                          
                           
                            
                      
  

// Important note: start() and stop() will only be called at most once.
// Once an animation has been stopped or finished its course, it will
// not be reused.
class Animation {
  __active         ;
  __isInteraction         ;
  __nativeId        ;
  __onEnd              ;
  __iterations        ;
  start(
    fromValue        ,
    onUpdate                         ,
    onEnd              ,
    previousAnimation            ,
    animatedValue               ,
  )       {}
  stop()       {
    if (this.__nativeId) {
      NativeAnimatedHelper.API.stopAnimation(this.__nativeId);
    }
  }
  __getNativeAnimationConfig()      {
    // Subclasses that have corresponding animation implementation done in native
    // should override this method
    throw new Error('This animation type cannot be offloaded to native');
  }
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result           )       {
    const onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  }
  __startNativeAnimation(animatedValue               )       {
    NativeAnimatedHelper.API.enableQueue();
    animatedValue.__makeNative();
    NativeAnimatedHelper.API.disableQueue();
    this.__nativeId = NativeAnimatedHelper.generateNewAnimationId();
    NativeAnimatedHelper.API.startAnimatingNode(
      this.__nativeId,
      animatedValue.__getNativeTag(),
      this.__getNativeAnimationConfig(),
      this.__debouncedOnEnd.bind(this),
    );
  }
}

module.exports = Animation;
