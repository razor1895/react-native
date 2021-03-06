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

const Platform = require('../../Utilities/Platform');
const React = require('react');
const StatusBar = require('../StatusBar/StatusBar');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const View = require('../View/View');

const dismissKeyboard = require('../../Utilities/dismissKeyboard');
const nullthrows = require('nullthrows');

import AndroidDrawerLayoutNativeComponent, {
  Commands,
} from './AndroidDrawerLayoutNativeComponent';

const DRAWER_STATES = ['Idle', 'Dragging', 'Settling'];

                                                               
                                                                 
                                                                 
             
                           
                                   
                                 
                                               

                                                     

                                    
                 
    

                         
     
                                                                          
                                                                 
                                                                 
     
                                              

     
                                                                              
                                                                     
    
        
             
                                                                    
                             
       
        
     
                                    

     
                                                                          
     
                                      

     
                                                                                              
                                 
     
                        

     
                                                                                 
                                                                                               
                                                                                           
                                                                                         
                                                                                             
     
                                                                   

     
                                                                               
     
                                                        

     
                                                                                      
                                                                                           
                                                                                   
                                                                                        
                                                                      
     
                                                         

     
                                                                  
     
                              

     
                                                                  
     
                               

     
                                                                                              
     
                                                 

     
                                                                          
                                                                             
                       
     
                                         

                        
                         
    

               
                                       
   

/**
 * React component that wraps the platform `DrawerLayout` (Android only). The
 * Drawer (typically used for navigation) is rendered with `renderNavigationView`
 * and direct children are the main view (where your content goes). The navigation
 * view is initially not visible on the screen, but can be pulled in from the
 * side of the window specified by the `drawerPosition` prop and its width can
 * be set by the `drawerWidth` prop.
 *
 * Example:
 *
 * ```
 * render: function() {
 *   var navigationView = (
 *     <View style={{flex: 1, backgroundColor: '#fff'}}>
 *       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
 *     </View>
 *   );
 *   return (
 *     <DrawerLayoutAndroid
 *       drawerWidth={300}
 *       drawerPosition="left"
 *       renderNavigationView={() => navigationView}>
 *       <View style={{flex: 1, alignItems: 'center'}}>
 *         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
 *         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
 *       </View>
 *     </DrawerLayoutAndroid>
 *   );
 * },
 * ```
 */
class DrawerLayoutAndroid extends React.Component               {
  static get positions()        {
    console.warn(
      'Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value "left" or "right"',
    );

    return {Left: 'left', Right: 'right'};
  }
  static defaultProps    
                                   
     = {
    drawerBackgroundColor: 'white',
  };

  _nativeRef = React.createRef 
                                                                
   ();

  state        = {statusBarBackgroundColor: null};

  render()             {
    const {
      onDrawerStateChanged,
      renderNavigationView,
      onDrawerOpen,
      onDrawerClose,
      ...props
    } = this.props;
    const drawStatusBar =
      Platform.Version >= 21 && this.props.statusBarBackgroundColor != null;
    const drawerViewWrapper = (
      <View
        style={[
          styles.drawerSubview,
          {
            width: this.props.drawerWidth,
            backgroundColor: this.props.drawerBackgroundColor,
          },
        ]}
        collapsable={false}>
        {renderNavigationView()}
        {drawStatusBar && <View style={styles.drawerStatusBar} />}
      </View>
    );
    const childrenWrapper = (
      <View style={styles.mainSubview} collapsable={false}>
        {drawStatusBar && (
          <StatusBar
            translucent
            backgroundColor={this.props.statusBarBackgroundColor}
          />
        )}
        {drawStatusBar && (
          <View
            style={[
              styles.statusBar,
              {backgroundColor: this.props.statusBarBackgroundColor},
            ]}
          />
        )}
        {this.props.children}
      </View>
    );
    return (
      <AndroidDrawerLayoutNativeComponent
        {...props}
        ref={this._nativeRef}
        drawerWidth={this.props.drawerWidth}
        drawerPosition={this.props.drawerPosition}
        drawerLockMode={this.props.drawerLockMode}
        style={[styles.base, this.props.style]}
        onDrawerSlide={this._onDrawerSlide}
        onDrawerOpen={this._onDrawerOpen}
        onDrawerClose={this._onDrawerClose}
        onDrawerStateChanged={this._onDrawerStateChanged}>
        {childrenWrapper}
        {drawerViewWrapper}
      </AndroidDrawerLayoutNativeComponent>
    );
  }

  _onDrawerSlide = event => {
    if (this.props.onDrawerSlide) {
      this.props.onDrawerSlide(event);
    }
    if (this.props.keyboardDismissMode === 'on-drag') {
      dismissKeyboard();
    }
  };

  _onDrawerOpen = () => {
    if (this.props.onDrawerOpen) {
      this.props.onDrawerOpen();
    }
  };

  _onDrawerClose = () => {
    if (this.props.onDrawerClose) {
      this.props.onDrawerClose();
    }
  };

  _onDrawerStateChanged = event => {
    if (this.props.onDrawerStateChanged) {
      this.props.onDrawerStateChanged(
        DRAWER_STATES[event.nativeEvent.drawerState],
      );
    }
  };

  /**
   * Opens the drawer.
   */
  openDrawer() {
    Commands.openDrawer(nullthrows(this._nativeRef.current));
  }

  /**
   * Closes the drawer.
   */
  closeDrawer() {
    Commands.closeDrawer(nullthrows(this._nativeRef.current));
  }

  /**
   * Closing and opening example
   * Note: To access the drawer you have to give it a ref
   *
   * Class component:
   *
   * render () {
   *   this.openDrawer = () => {
   *     this.refs.DRAWER.openDrawer()
   *   }
   *   this.closeDrawer = () => {
   *     this.refs.DRAWER.closeDrawer()
   *   }
   *   return (
   *     <DrawerLayoutAndroid ref={'DRAWER'}>
   *      {children}
   *     </DrawerLayoutAndroid>
   *   )
   * }
   *
   * Function component:
   *
   * const drawerRef = useRef()
   * const openDrawer = () => {
   *   drawerRef.current.openDrawer()
   * }
   * const closeDrawer = () => {
   *   drawerRef.current.closeDrawer()
   * }
   * return (
   *   <DrawerLayoutAndroid ref={drawerRef}>
   *     {children}
   *   </DrawerLayoutAndroid>
   * )
   */

  /**
   * Native methods
   */
  blur() {
    nullthrows(this._nativeRef.current).blur();
  }

  focus() {
    nullthrows(this._nativeRef.current).focus();
  }

  measure(callback                          ) {
    nullthrows(this._nativeRef.current).measure(callback);
  }

  measureInWindow(callback                                  ) {
    nullthrows(this._nativeRef.current).measureInWindow(callback);
  }

  measureLayout(
    relativeToNativeNode        ,
    onSuccess                                ,
    onFail             ,
  ) {
    nullthrows(this._nativeRef.current).measureLayout(
      relativeToNativeNode,
      onSuccess,
      onFail,
    );
  }

  setNativeProps(nativeProps        ) {
    nullthrows(this._nativeRef.current).setNativeProps(nativeProps);
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    elevation: 16,
  },
  mainSubview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  drawerSubview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  statusBar: {
    height: StatusBar.currentHeight,
  },
  drawerStatusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: StatusBar.currentHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.251)',
  },
});

module.exports = DrawerLayoutAndroid;
