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

const {AnimatedEvent, attachNativeEvent} = require('./AnimatedEvent');
const AnimatedImplementation = require('./AnimatedImplementation');
const AnimatedInterpolation = require('./nodes/AnimatedInterpolation');
const AnimatedNode = require('./nodes/AnimatedNode');
const AnimatedProps = require('./nodes/AnimatedProps');
const AnimatedValue = require('./nodes/AnimatedValue');
const AnimatedValueXY = require('./nodes/AnimatedValueXY');

const createAnimatedComponent = require('./createAnimatedComponent');

                                                        
                                                                        
                                                                      
                                                                        
                                                          

/**
 * Animations are a source of flakiness in snapshot testing. This mock replaces
 * animation functions from AnimatedImplementation with empty animations for
 * predictability in tests.
 */
                                  
                                           
                   
                    
                                                  
                                      
     
  

const emptyAnimation = {
  start: () => {},
  stop: () => {},
  reset: () => {},
  _startNativeLoop: () => {},
  _isUsingNativeDriver: () => {
    return false;
  },
};

const spring = function(
  value                                 ,
  config                       ,
)                     {
  const anyValue      = value;
  return {
    ...emptyAnimation,
    start: (callback               )       => {
      anyValue.setValue(config.toValue);
      callback && callback({finished: true});
    },
  };
};

const timing = function(
  value                                 ,
  config                       ,
)                     {
  const anyValue      = value;
  return {
    ...emptyAnimation,
    start: (callback               )       => {
      anyValue.setValue(config.toValue);
      callback && callback({finished: true});
    },
  };
};

const decay = function(
  value                                 ,
  config                      ,
)                     {
  return emptyAnimation;
};

const sequence = function(
  animations                           ,
)                     {
  return emptyAnimation;
};

                                                    
const parallel = function(
  animations                           ,
  config                  ,
)                     {
  return emptyAnimation;
};

const delay = function(time        )                     {
  return emptyAnimation;
};

const stagger = function(
  time        ,
  animations                           ,
)                     {
  return emptyAnimation;
};

                            
                     
                                 
     
  

const loop = function(
  animation                    ,
  {iterations = -1}                      = {},
)                     {
  return emptyAnimation;
};

const event = function(argMapping                 , config             )      {
  return null;
};

module.exports = {
  Value: AnimatedValue,
  ValueXY: AnimatedValueXY,
  Interpolation: AnimatedInterpolation,
  Node: AnimatedNode,
  decay,
  timing,
  spring,
  add: AnimatedImplementation.add,
  subtract: AnimatedImplementation.subtract,
  divide: AnimatedImplementation.divide,
  multiply: AnimatedImplementation.multiply,
  modulo: AnimatedImplementation.modulo,
  diffClamp: AnimatedImplementation.diffClamp,
  delay,
  sequence,
  parallel,
  stagger,
  loop,
  event,
  createAnimatedComponent,
  attachNativeEvent,
  forkEvent: AnimatedImplementation.forkEvent,
  unforkEvent: AnimatedImplementation.unforkEvent,
  Event: AnimatedEvent,
  __PropsOnlyForTests: AnimatedProps,
};
