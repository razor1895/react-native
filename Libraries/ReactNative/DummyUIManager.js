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

module.exports = {
  getViewManagerConfig: (viewManagerName        )        => {
    console.warn(
      'Attempting to get config for view manager: ' + viewManagerName,
    );
    if (viewManagerName === 'RCTVirtualText') {
      return {};
    }
    return null;
  },
  getConstants: ()        => ({}),
  getConstantsForViewManager: (viewManagerName        ) => {},
  getDefaultEventTypes: ()                    => [],
  playTouchSound: () => {},
  lazilyLoadView: (name        ) => {},
  createView: (
    reactTag         ,
    viewName        ,
    rootTag        ,
    props        ,
  ) => {},
  updateView: (reactTag        , viewName        , props        ) => {},
  focus: (reactTag         ) => {},
  blur: (reactTag         ) => {},
  findSubviewIn: (
    reactTag         ,
    point               ,
    callback   
                            
                   
                  
                    
                     
             ,
  ) => {},
  dispatchViewManagerCommand: (
    reactTag         ,
    commandID        ,
    commandArgs                                   ,
  ) => {},
  measure: (
    reactTag         ,
    callback   
                   
                  
                    
                     
                    
                    
             ,
  ) => {},
  measureInWindow: (
    reactTag         ,
    callback                                                               ,
  ) => {},
  viewIsDescendantOf: (
    reactTag         ,
    ancestorReactTag         ,
    callback                                  ,
  ) => {},
  measureLayout: (
    reactTag         ,
    ancestorReactTag         ,
    errorCallback                         ,
    callback   
                   
                  
                    
                     
             ,
  ) => {},
  measureLayoutRelativeToParent: (
    reactTag         ,
    errorCallback                         ,
    callback   
                   
                  
                    
                     
             ,
  ) => {},
  setJSResponder: (reactTag         , blockNativeResponder         ) => {},
  clearJSResponder: () => {},
  configureNextLayoutAnimation: (
    config        ,
    callback            ,
    errorCallback                         ,
  ) => {},
  removeSubviewsFromContainerWithID: (containerID        ) => {},
  replaceExistingNonRootView: (reactTag         , newReactTag         ) => {},
  setChildren: (containerTag         , reactTags               ) => {},
  manageChildren: (
    containerTag         ,
    moveFromIndices               ,
    moveToIndices               ,
    addChildReactTags               ,
    addAtIndices               ,
    removeAtIndices               ,
  ) => {},

  // Android only
  setLayoutAnimationEnabledExperimental: (enabled         ) => {},
  sendAccessibilityEvent: (reactTag         , eventType        ) => {},
  showPopupMenu: (
    reactTag         ,
    items               ,
    error                         ,
    success                                            ,
  ) => {},
  dismissPopupMenu: () => {},
};
