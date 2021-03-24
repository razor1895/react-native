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

import NativeEventEmitter from '../../EventEmitter/NativeEventEmitter';
                                                 
import NativeAnimatedModule from './NativeAnimatedModule';
             
               
                     
                      
                                
                                                                         
                                                                           
import invariant from 'invariant';

let __nativeAnimatedNodeTagCount = 1; /* used for animated nodes */
let __nativeAnimationIdCount = 1; /* used for started animations */

let nativeEventEmitter;

let queueConnections = false;
let queue = [];

/**
 * Simple wrappers around NativeAnimatedModule to provide flow and autocomplete support for
 * the native module methods
 */
const API = {
  enableQueue: function()       {
    queueConnections = true;
  },
  disableQueue: function()       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    queueConnections = false;
    for (let q = 0, l = queue.length; q < l; q++) {
      const args = queue[q];
      NativeAnimatedModule.connectAnimatedNodes(args[0], args[1]);
    }
    queue.length = 0;
  },
  createAnimatedNode: function(tag        , config                    )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.createAnimatedNode(tag, config);
  },
  startListeningToAnimatedNodeValue: function(tag        ) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.startListeningToAnimatedNodeValue(tag);
  },
  stopListeningToAnimatedNodeValue: function(tag        ) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.stopListeningToAnimatedNodeValue(tag);
  },
  connectAnimatedNodes: function(parentTag        , childTag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    if (queueConnections) {
      queue.push([parentTag, childTag]);
      return;
    }
    NativeAnimatedModule.connectAnimatedNodes(parentTag, childTag);
  },
  disconnectAnimatedNodes: function(parentTag        , childTag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.disconnectAnimatedNodes(parentTag, childTag);
  },
  startAnimatingNode: function(
    animationId        ,
    nodeTag        ,
    config                     ,
    endCallback             ,
  )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.startAnimatingNode(
      animationId,
      nodeTag,
      config,
      endCallback,
    );
  },
  stopAnimation: function(animationId        ) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.stopAnimation(animationId);
  },
  setAnimatedNodeValue: function(nodeTag        , value        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.setAnimatedNodeValue(nodeTag, value);
  },
  setAnimatedNodeOffset: function(nodeTag        , offset        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.setAnimatedNodeOffset(nodeTag, offset);
  },
  flattenAnimatedNodeOffset: function(nodeTag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.flattenAnimatedNodeOffset(nodeTag);
  },
  extractAnimatedNodeOffset: function(nodeTag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.extractAnimatedNodeOffset(nodeTag);
  },
  connectAnimatedNodeToView: function(nodeTag        , viewTag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.connectAnimatedNodeToView(nodeTag, viewTag);
  },
  disconnectAnimatedNodeFromView: function(
    nodeTag        ,
    viewTag        ,
  )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.disconnectAnimatedNodeFromView(nodeTag, viewTag);
  },
  restoreDefaultValues: function(nodeTag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    // Backwards compat with older native runtimes, can be removed later.
    if (NativeAnimatedModule.restoreDefaultValues != null) {
      NativeAnimatedModule.restoreDefaultValues(nodeTag);
    }
  },
  dropAnimatedNode: function(tag        )       {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.dropAnimatedNode(tag);
  },
  addAnimatedEventToView: function(
    viewTag        ,
    eventName        ,
    eventMapping              ,
  ) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.addAnimatedEventToView(
      viewTag,
      eventName,
      eventMapping,
    );
  },
  removeAnimatedEventFromView(
    viewTag        ,
    eventName        ,
    animatedNodeTag        ,
  ) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.removeAnimatedEventFromView(
      viewTag,
      eventName,
      animatedNodeTag,
    );
  },
};

/**
 * Styles allowed by the native animated implementation.
 *
 * In general native animated implementation should support any numeric property that doesn't need
 * to be updated through the shadow view hierarchy (all non-layout properties).
 */
const STYLES_WHITELIST = {
  opacity: true,
  transform: true,
  borderRadius: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  elevation: true,
  zIndex: true,
  /* ios styles */
  shadowOpacity: true,
  shadowRadius: true,
  /* legacy android transform properties */
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true,
};

const TRANSFORM_WHITELIST = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
  perspective: true,
};

const SUPPORTED_INTERPOLATION_PARAMS = {
  inputRange: true,
  outputRange: true,
  extrapolate: true,
  extrapolateRight: true,
  extrapolateLeft: true,
};

function addWhitelistedStyleProp(prop        )       {
  STYLES_WHITELIST[prop] = true;
}

function addWhitelistedTransformProp(prop        )       {
  TRANSFORM_WHITELIST[prop] = true;
}

function addWhitelistedInterpolationParam(param        )       {
  SUPPORTED_INTERPOLATION_PARAMS[param] = true;
}

function validateTransform(
  configs        
       
                         
                         
                         
           
       
       
                       
                         
                               
           
        
   ,
)       {
  configs.forEach(config => {
    if (!TRANSFORM_WHITELIST.hasOwnProperty(config.property)) {
      throw new Error(
        `Property '${
          config.property
        }' is not supported by native animated module`,
      );
    }
  });
}

function validateStyles(styles                               )       {
  for (const key in styles) {
    if (!STYLES_WHITELIST.hasOwnProperty(key)) {
      throw new Error(
        `Style property '${key}' is not supported by native animated module`,
      );
    }
  }
}

function validateInterpolation(config                         )       {
  for (const key in config) {
    if (!SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(key)) {
      throw new Error(
        `Interpolation property '${key}' is not supported by native animated module`,
      );
    }
  }
}

function generateNewNodeTag()         {
  return __nativeAnimatedNodeTagCount++;
}

function generateNewAnimationId()         {
  return __nativeAnimationIdCount++;
}

function assertNativeAnimatedModule()       {
  invariant(NativeAnimatedModule, 'Native animated module is not available');
}

let _warnedMissingNativeAnimated = false;

function shouldUseNativeDriver(
  config                                         ,
)          {
  if (config.useNativeDriver == null) {
    console.warn(
      'Animated: `useNativeDriver` was not specified. This is a required ' +
        'option and must be explicitly set to `true` or `false`',
    );
  }

  if (config.useNativeDriver === true && !NativeAnimatedModule) {
    if (!_warnedMissingNativeAnimated) {
      console.warn(
        'Animated: `useNativeDriver` is not supported because the native ' +
          'animated module is missing. Falling back to JS-based animation. To ' +
          'resolve this, add `RCTAnimation` module to this app, or remove ' +
          '`useNativeDriver`. ' +
          'Make sure to run `pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md',
      );
      _warnedMissingNativeAnimated = true;
    }
    return false;
  }

  return config.useNativeDriver || false;
}

function transformDataType(value                 )                  {
  // Change the string type to number type so we can reuse the same logic in
  // iOS and Android platform
  if (typeof value !== 'string') {
    return value;
  }
  if (/deg$/.test(value)) {
    const degrees = parseFloat(value) || 0;
    const radians = (degrees * Math.PI) / 180.0;
    return radians;
  } else {
    return value;
  }
}

module.exports = {
  API,
  addWhitelistedStyleProp,
  addWhitelistedTransformProp,
  addWhitelistedInterpolationParam,
  validateStyles,
  validateTransform,
  validateInterpolation,
  generateNewNodeTag,
  generateNewAnimationId,
  assertNativeAnimatedModule,
  shouldUseNativeDriver,
  transformDataType,
  // $FlowExpectedError - unsafe getter lint suppresion
  get nativeEventEmitter()                     {
    if (!nativeEventEmitter) {
      nativeEventEmitter = new NativeEventEmitter(NativeAnimatedModule);
    }
    return nativeEventEmitter;
  },
};
