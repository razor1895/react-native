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

const AnimatedImplementation = require('../../Animated/src/AnimatedImplementation');
const Platform = require('../../Utilities/Platform');
const React = require('react');
const ReactNative = require('../../Renderer/shims/ReactNative');
require('../../Renderer/shims/ReactNative'); // Force side effects to prevent T55744311
const ScrollResponder = require('../ScrollResponder');
const ScrollViewStickyHeader = require('./ScrollViewStickyHeader');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const View = require('../View/View');

const dismissKeyboard = require('../../Utilities/dismissKeyboard');
const flattenStyle = require('../../StyleSheet/flattenStyle');
const invariant = require('invariant');
const processDecelerationRate = require('./processDecelerationRate');
const resolveAssetSource = require('../../Image/resolveAssetSource');
const splitLayoutProps = require('../../StyleSheet/splitLayoutProps');
const setAndForwardRef = require('../../Utilities/setAndForwardRef');

                                                                        
                                                              
                                                               
                                                                 
             
             
              
              
                                    
                                                                         
                                                                      
                                                     
                                                                                   

import ScrollViewNativeComponent from './ScrollViewNativeComponent';
import ScrollContentViewNativeComponent from './ScrollContentViewNativeComponent';
import AndroidHorizontalScrollViewNativeComponent from './AndroidHorizontalScrollViewNativeComponent';
import AndroidHorizontalScrollContentViewNativeComponent from './AndroidHorizontalScrollContentViewNativeComponent';

let AndroidScrollView;
let AndroidHorizontalScrollContentView;
let AndroidHorizontalScrollView;
let RCTScrollView;
let RCTScrollContentView;

if (Platform.OS === 'android') {
  AndroidScrollView = ScrollViewNativeComponent;
  AndroidHorizontalScrollView = AndroidHorizontalScrollViewNativeComponent;
  AndroidHorizontalScrollContentView = AndroidHorizontalScrollContentViewNativeComponent;
} else {
  RCTScrollView = ScrollViewNativeComponent;
  RCTScrollContentView = ScrollContentViewNativeComponent;
}

// Public methods for ScrollView
                                                      
                                                                      
                                                                    
                                                                  
                                                                
                                                                      
                                                  
                                                        
                                                                            

                                         
                                       
                                 
                            
    
                                                             
                                 
                                                  
    
    

                                                              

                            
     
                                                                       
                                                                
                                                 
                  
     
                                              
     
                                                                        
                                                                              
                  
     
                                 
     
                                                     
                                         
                  
     
                             
     
                                                                      
                                                                            
                                                                       
                                                                   
                  
     
                     
     
                                                                                  
                                                                                      
                                                                                               
                                                                                                   
     
                                           
     
                                                                              
                                                                            
                
                  
     
                         
     
                                                                            
                                                                            
                                                                
                  
     
                                    
     
                                                                          
                                                                            
                                                                
                  
     
                                  
     
                                                                          
                                                                        
                                                                          
                    
                  
     
                           
     
                                        
    
                                                    
                                                                                             
                                                                                            
    
                  
     
                                                    
     
                                                                              
                                                           
                  
     
                                    
     
                                                                            
                               
                  
     
                                     
     
                                                                                              
                                                                                              
                                                                                                
                                                                                                  
                                                                                                 
                           
    
                                                                                                 
                                                                                                  
                                                                                                  
                                                                                               
                                  
    
                                                                                          
                                                                                             
                                                                                  
    
                                                                                            
                                                                                              
                                         
    
                  
     
                                                
                               
                                       
      
     
                                                              
                  
     
                             
     
                                                              
                  
     
                             
     
                                                                           
                               
                  
     
                                 
     
                                                                           
                                                                               
                                                                             
                                                                          
    
                                                                               
                      
    
                                                                               
                                                           
    
                                                                                 
                                         
    
                  
     
                                
     
                                                                            
                                                                         
                                                    
                  
     
                                          
     
                                                                           
                                              
                  
     
                                     
     
                                                                             
                               
                  
     
                          
     
                                                                                   
                  
     
                                               
     
                                                    
                               
     
                                            
     
                                                                                 
                                        
    
                                                                                               
                                                     
                                                                                   
    
                  
     
                                                  
     
                                                                            
                  
     
                      
     
                                                                            
                                                                           
                                            
                  
     
                                     
                 
                      
             
              
    
     
                                                                             
                                                                           
                                                                            
                
                                
                  
     
                                               
    

                                
     
                                                        
                                                    
                      
     
                                 
     
                                                                                    
                                                                                           
                                                                                     
                                            
                      
     
                             
     
                                                                       
                                                                              
                                                                      
                                     
                      
     
                          
     
                                                       
    
                     
    
                                                             
                                                                             
                                                                  
                                                                
    
                      
     
                                                  
     
                                                                            
                                
    
                      
     
                                 
     
                                                   
    
                                                                             
                                                  
                                                 
    
                            
    
                      
     
                             
    

                           
     
                                                                        
                                                                         
                                                                        
                                                   
    
                                                                                 
                                                                              
                                                        
                                       
                 
     
                                                                                                               
    

                                                         
                              
                                                   
  

                                
               
              
                  
             

     
                                                                            
                                           
    
        
             
                                                                   
                    
       
        
                                       
                          
                            
        
        
        
     
                                         
     
                                                                              
                                                                            
                                                                    
                                                                                                
     
                                     
     
                                                                        
                                                                           
                                                                              
                                                 
                                                     
    
                                                                 
                                              
     
                                                   
     
                                                                             
                                                                   
     
                        
     
                                                                           
                                                                
     
                                 
     
                                                                          
    
                     
    
                                                                   
                                                                   
    
               
    
                                                                                            
                                                                          
                                                                                       
     
                                   
                             
               
                   
                
     
                                                                  
    
                                                                                             
                                                                                         
                                                                                              
                                                                    
                                                                                             
                                                  
                                                 
                                                 
     
                                                                               
     
                                                                                                     
     
                                                        
     
                                                                                                   
     
                                                      

     
                                                                        
                                                                   
     
                                           
     
                                                         
     
                                                    
     
                                                                            
                        
     
                                                  
     
                                                                   
    
                                                                                   
                                    
    
                                                                              
                                   
     
                                                                              
                                                  
     
                                                                            
                                                                            
                    
    
                                                           
     
                           

     
                                                                   
                               
    
                                                                     
     
                           
     
                                                  
                               
     
                                          
     
                                                                           
                                                           
                                                                              
                                                                          
                              
     
                                                
     
                                                                  
                                                                                                                
                                                                                             
                                                                            
     
                                                    
     
                                                                          
                                                                       
                                                                      
                                                                      
    
                                                      
     
                           
     
                                                                     
                                                                     
                                                                      
                                                
    
                                                                            
     
                                          
     
                                                                       
                                                                               
                                                                            
                                      
                               
     
                         
     
                                                                 
                                                                             
                                                                          
                                     
                               
     
                       
     
                                                                              
                                                                              
                                                                               
          
     
                                   
     
                                                                
                                                                          
                                         
    
                                                    
     
                                                                          
                                       
                        
     
                                                                           
                                          
     
                                        
     
                                                                           
                                                                           
                                 
     
                            
                                                                   
    
    

               
                        
                          
   

function createScrollResponder(
  node                                     ,
)                               {
  const scrollResponder = {...ScrollResponder.Mixin};

  for (const key in scrollResponder) {
    if (typeof scrollResponder[key] === 'function') {
      scrollResponder[key] = scrollResponder[key].bind(node);
    }
  }

  return scrollResponder;
}

                                                  
const Context                             = React.createContext(null);
const standardHorizontalContext              = Object.freeze({
  horizontal: true,
});
const standardVerticalContext              = Object.freeze({horizontal: false});
                                              
                          
    

/**
 * Component that wraps platform ScrollView while providing
 * integration with touch locking "responder" system.
 *
 * Keep in mind that ScrollViews must have a bounded height in order to work,
 * since they contain unbounded-height children into a bounded container (via
 * a scroll interaction). In order to bound the height of a ScrollView, either
 * set the height of the view directly (discouraged) or make sure all parent
 * views have bounded height. Forgetting to transfer `{flex: 1}` down the
 * view stack can lead to errors here, which the element inspector makes
 * easy to debug.
 *
 * Doesn't yet support other contained responders from blocking this scroll
 * view from becoming the responder.
 *
 *
 * `<ScrollView>` vs [`<FlatList>`](https://reactnative.dev/docs/flatlist.html) - which one to use?
 *
 * `ScrollView` simply renders all its react child components at once. That
 * makes it very easy to understand and use.
 *
 * On the other hand, this has a performance downside. Imagine you have a very
 * long list of items you want to display, maybe several screens worth of
 * content. Creating JS components and native views for everything all at once,
 * much of which may not even be shown, will contribute to slow rendering and
 * increased memory usage.
 *
 * This is where `FlatList` comes into play. `FlatList` renders items lazily,
 * just when they are about to appear, and removes items that scroll way off
 * screen to save memory and processing time.
 *
 * `FlatList` is also handy if you want to render separators between your items,
 * multiple columns, infinite scroll loading, or any number of other features it
 * supports out of the box.
 */
class ScrollView extends React.Component               {
  static Context                             = Context;
  /**
   * Part 1: Removing ScrollResponder.Mixin:
   *
   * 1. Mixin methods should be flow typed. That's why we create a
   *    copy of ScrollResponder.Mixin and attach it to this._scrollResponder.
   *    Otherwise, we'd have to manually declare each method on the component
   *    class and assign it a flow type.
   * 2. Mixin methods can call component methods, and access the component's
   *    props and state. So, we need to bind all mixin methods to the
   *    component instance.
   * 3. Continued...
   */
  _scrollResponder                               = createScrollResponder(this);

  constructor(props       ) {
    super(props);

    /**
     * Part 2: Removing ScrollResponder.Mixin
     *
     * 3. Mixin methods access other mixin methods via dynamic dispatch using
     *    this. Since mixin methods are bound to the component instance, we need
     *    to copy all mixin methods to the component instance. This is also
     *    necessary because getScrollResponder() is a public method that returns
     *    an object that can be used to execute all scrollResponder methods.
     *    Since the object returned from that method is the ScrollView instance,
     *    we need to bind all mixin methods to the ScrollView instance.
     */
    for (const key in ScrollResponder.Mixin) {
      if (
        typeof ScrollResponder.Mixin[key] === 'function' &&
        key.startsWith('scrollResponder')
      ) {
        // $FlowFixMe - dynamically adding properties to a class
        (this     )[key] = ScrollResponder.Mixin[key].bind(this);
      }
    }

    /**
     * Part 3: Removing ScrollResponder.Mixin
     *
     * 4. Mixins can initialize properties and use properties on the component
     *    instance.
     */
    Object.keys(ScrollResponder.Mixin)
      .filter(key => typeof ScrollResponder.Mixin[key] !== 'function')
      .forEach(key => {
        // $FlowFixMe - dynamically adding properties to a class
        (this     )[key] = ScrollResponder.Mixin[key];
      });
  }

  _scrollAnimatedValue                               = new AnimatedImplementation.Value(
    0,
  );
  _scrollAnimatedValueAttachment                             = null;
  _stickyHeaderRefs      
           
                                                
    = new Map();
  _headerLayoutYs                      = new Map();

  state        = {
    layoutHeight: null,
    ...ScrollResponder.Mixin.scrollResponderMixinGetInitialState(),
  };

  UNSAFE_componentWillMount() {
    this._scrollResponder.UNSAFE_componentWillMount();
    this._scrollAnimatedValue = new AnimatedImplementation.Value(
      this.props.contentOffset?.y ?? 0,
    );
    this._scrollAnimatedValue.setOffset(this.props.contentInset?.top ?? 0);
    this._stickyHeaderRefs = new Map();
    this._headerLayoutYs = new Map();
  }

  UNSAFE_componentWillReceiveProps(nextProps       ) {
    const currentContentInsetTop = this.props.contentInset
      ? this.props.contentInset.top
      : 0;
    const nextContentInsetTop = nextProps.contentInset
      ? nextProps.contentInset.top
      : 0;
    if (currentContentInsetTop !== nextContentInsetTop) {
      this._scrollAnimatedValue.setOffset(nextContentInsetTop || 0);
    }
  }

  componentDidMount() {
    this._updateAnimatedNodeAttachment();
  }

  componentDidUpdate() {
    this._updateAnimatedNodeAttachment();
  }

  componentWillUnmount() {
    this._scrollResponder.componentWillUnmount();
    if (this._scrollAnimatedValueAttachment) {
      this._scrollAnimatedValueAttachment.detach();
    }
  }

  _setNativeRef = setAndForwardRef({
    getForwardedRef: () => this.props.scrollViewRef,
    setLocalRef: ref => {
      this._scrollViewRef = ref;

      /*
        This is a hack. Ideally we would forwardRef to the underlying
        host component. However, since ScrollView has it's own methods that can be
        called as well, if we used the standard forwardRef then these
        methods wouldn't be accessible and thus be a breaking change.

        Therefore we edit ref to include ScrollView's public methods so that
        they are callable from the ref.
      */
      if (ref) {
        ref.getScrollResponder = this.getScrollResponder;
        ref.getScrollableNode = this.getScrollableNode;
        ref.getInnerViewNode = this.getInnerViewNode;
        ref.getInnerViewRef = this.getInnerViewRef;
        ref.getNativeScrollRef = this.getNativeScrollRef;
        ref.scrollTo = this.scrollTo;
        ref.scrollToEnd = this.scrollToEnd;
        ref.flashScrollIndicators = this.flashScrollIndicators;

        // $FlowFixMe - This method was manually bound from ScrollResponder.mixin
        ref.scrollResponderZoomTo = this.scrollResponderZoomTo;
        // $FlowFixMe - This method was manually bound from ScrollResponder.mixin
        ref.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard;
      }
    },
  });

  /**
   * Returns a reference to the underlying scroll responder, which supports
   * operations like `scrollTo`. All ScrollView-like components should
   * implement this method so that they can be composed while providing access
   * to the underlying scroll responder's methods.
   */
  getScrollResponder                            = () => {
    // $FlowFixMe - overriding type to include ScrollResponder.Mixin
    return ((this     )                     );
  };

  getScrollableNode                = () => {
    return ReactNative.findNodeHandle(this._scrollViewRef);
  };

  getInnerViewNode()          {
    return ReactNative.findNodeHandle(this._innerViewRef);
  }

  getInnerViewRef()                                 {
    return this._innerViewRef;
  }

  getNativeScrollRef                                                = () => {
    return this._scrollViewRef;
  };

  /**
   * Scrolls to a given x, y offset, either immediately or with a smooth animation.
   *
   * Example:
   *
   * `scrollTo({x: 0, y: 0, animated: true})`
   *
   * Note: The weird function signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as an alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  scrollTo   
             
         
                     
                     
                             
             
         
               
                         
                                 
            = (
    options  
         
                     
                     
                             
             
         
              ,
    deprecatedX         ,
    deprecatedAnimated          ,
  ) => {
    let x, y, animated;
    if (typeof options === 'number') {
      console.warn(
        '`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, ' +
          'animated: true})` instead.',
      );
      y = options;
      x = deprecatedX;
      animated = deprecatedAnimated;
    } else if (options) {
      y = options.y;
      x = options.x;
      animated = options.animated;
    }
    this._scrollResponder.scrollResponderScrollTo({
      x: x || 0,
      y: y || 0,
      animated: animated !== false,
    });
  };

  /**
   * If this is a vertical ScrollView scrolls to the bottom.
   * If this is a horizontal ScrollView scrolls to the right.
   *
   * Use `scrollToEnd({animated: true})` for smooth animated scrolling,
   * `scrollToEnd({animated: false})` for immediate scrolling.
   * If no options are passed, `animated` defaults to true.
   */
  scrollToEnd                                                 = (
    options                             ,
  ) => {
    // Default to true
    const animated = (options && options.animated) !== false;
    this._scrollResponder.scrollResponderScrollToEnd({
      animated: animated,
    });
  };

  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators             = () => {
    this._scrollResponder.scrollResponderFlashScrollIndicators();
  };

  _getKeyForIndex(index, childArray) {
    const child = childArray[index];
    return child && child.key;
  }

  _updateAnimatedNodeAttachment() {
    if (this._scrollAnimatedValueAttachment) {
      this._scrollAnimatedValueAttachment.detach();
    }
    if (
      this.props.stickyHeaderIndices &&
      this.props.stickyHeaderIndices.length > 0
    ) {
      this._scrollAnimatedValueAttachment = AnimatedImplementation.attachNativeEvent(
        this._scrollViewRef,
        'onScroll',
        [{nativeEvent: {contentOffset: {y: this._scrollAnimatedValue}}}],
      );
    }
  }

  _setStickyHeaderRef(
    key        ,
    ref                                              ,
  ) {
    if (ref) {
      this._stickyHeaderRefs.set(key, ref);
    } else {
      this._stickyHeaderRefs.delete(key);
    }
  }

  _onStickyHeaderLayout(index, event, key) {
    const {stickyHeaderIndices} = this.props;
    if (!stickyHeaderIndices) {
      return;
    }
    const childArray = React.Children.toArray(this.props.children);
    if (key !== this._getKeyForIndex(index, childArray)) {
      // ignore stale layout update
      return;
    }

    const layoutY = event.nativeEvent.layout.y;
    this._headerLayoutYs.set(key, layoutY);

    const indexOfIndex = stickyHeaderIndices.indexOf(index);
    const previousHeaderIndex = stickyHeaderIndices[indexOfIndex - 1];
    if (previousHeaderIndex != null) {
      const previousHeader = this._stickyHeaderRefs.get(
        this._getKeyForIndex(previousHeaderIndex, childArray),
      );
      previousHeader &&
        previousHeader.setNextHeaderY &&
        previousHeader.setNextHeaderY(layoutY);
    }
  }

  _handleScroll = (e             ) => {
    if (__DEV__) {
      if (
        this.props.onScroll &&
        this.props.scrollEventThrottle == null &&
        Platform.OS === 'ios'
      ) {
        console.log(
          'You specified `onScroll` on a <ScrollView> but not ' +
            '`scrollEventThrottle`. You will only receive one event. ' +
            'Using `16` you get all the events but be aware that it may ' +
            "cause frame drops, use a bigger number if you don't need as " +
            'much precision.',
        );
      }
    }
    if (Platform.OS === 'android') {
      if (
        this.props.keyboardDismissMode === 'on-drag' &&
        this.state.isTouching
      ) {
        dismissKeyboard();
      }
    }
    this._scrollResponder.scrollResponderHandleScroll(e);
  };

  _handleLayout = (e             ) => {
    if (this.props.invertStickyHeaders === true) {
      this.setState({layoutHeight: e.nativeEvent.layout.height});
    }
    if (this.props.onLayout) {
      this.props.onLayout(e);
    }
  };

  _handleContentOnLayout = (e             ) => {
    const {width, height} = e.nativeEvent.layout;
    this.props.onContentSizeChange &&
      this.props.onContentSizeChange(width, height);
  };

  _scrollViewRef                                          = null;

  _innerViewRef                                 = null;
  _setInnerViewRef = setAndForwardRef({
    getForwardedRef: () => this.props.innerViewRef,
    setLocalRef: ref => {
      this._innerViewRef = ref;
    },
  });

  render()                                     {
    let ScrollViewClass;
    let ScrollContentContainerViewClass;
    if (Platform.OS === 'android') {
      if (this.props.horizontal === true) {
        ScrollViewClass = AndroidHorizontalScrollView;
        ScrollContentContainerViewClass = AndroidHorizontalScrollContentView;
      } else {
        ScrollViewClass = AndroidScrollView;
        ScrollContentContainerViewClass = View;
      }
    } else {
      ScrollViewClass = RCTScrollView;
      ScrollContentContainerViewClass = RCTScrollContentView;
    }

    invariant(
      ScrollViewClass !== undefined,
      'ScrollViewClass must not be undefined',
    );

    invariant(
      ScrollContentContainerViewClass !== undefined,
      'ScrollContentContainerViewClass must not be undefined',
    );

    const contentContainerStyle = [
      this.props.horizontal === true && styles.contentContainerHorizontal,
      this.props.contentContainerStyle,
    ];
    if (__DEV__ && this.props.style !== undefined) {
      const style = flattenStyle(this.props.style);
      const childLayoutProps = ['alignItems', 'justifyContent'].filter(
        prop => style && style[prop] !== undefined,
      );
      invariant(
        childLayoutProps.length === 0,
        'ScrollView child layout (' +
          JSON.stringify(childLayoutProps) +
          ') must be applied through the contentContainerStyle prop.',
      );
    }

    let contentSizeChangeProps = {};
    if (this.props.onContentSizeChange) {
      contentSizeChangeProps = {
        onLayout: this._handleContentOnLayout,
      };
    }

    const {stickyHeaderIndices} = this.props;
    let children = this.props.children;

    if (stickyHeaderIndices != null && stickyHeaderIndices.length > 0) {
      const childArray = React.Children.toArray(this.props.children);

      children = childArray.map((child, index) => {
        const indexOfIndex = child ? stickyHeaderIndices.indexOf(index) : -1;
        if (indexOfIndex > -1) {
          const key = child.key;
          const nextIndex = stickyHeaderIndices[indexOfIndex + 1];
          const StickyHeaderComponent =
            this.props.StickyHeaderComponent || ScrollViewStickyHeader;
          return (
            <StickyHeaderComponent
              key={key}
              ref={ref => this._setStickyHeaderRef(key, ref)}
              nextHeaderLayoutY={this._headerLayoutYs.get(
                this._getKeyForIndex(nextIndex, childArray),
              )}
              onLayout={event => this._onStickyHeaderLayout(index, event, key)}
              scrollAnimatedValue={this._scrollAnimatedValue}
              inverted={this.props.invertStickyHeaders}
              scrollViewHeight={this.state.layoutHeight}>
              {child}
            </StickyHeaderComponent>
          );
        } else {
          return child;
        }
      });
    }
    children = (
      <Context.Provider
        value={
          this.props.horizontal === true
            ? standardHorizontalContext
            : standardVerticalContext
        }>
        {children}
      </Context.Provider>
    );

    const hasStickyHeaders =
      Array.isArray(stickyHeaderIndices) && stickyHeaderIndices.length > 0;

    const contentContainer = (
      /* $FlowFixMe(>=0.112.0 site=react_native_fb) This comment suppresses an
       * error found when Flow v0.112 was deployed. To see the error, delete
       * this comment and run Flow. */
      <ScrollContentContainerViewClass
        {...contentSizeChangeProps}
        ref={this._setInnerViewRef}
        style={contentContainerStyle}
        removeClippedSubviews={
          // Subview clipping causes issues with sticky headers on Android and
          // would be hard to fix properly in a performant way.
          Platform.OS === 'android' && hasStickyHeaders
            ? false
            : this.props.removeClippedSubviews
        }
        collapsable={false}>
        {children}
      </ScrollContentContainerViewClass>
    );

    const alwaysBounceHorizontal =
      this.props.alwaysBounceHorizontal !== undefined
        ? this.props.alwaysBounceHorizontal
        : this.props.horizontal;

    const alwaysBounceVertical =
      this.props.alwaysBounceVertical !== undefined
        ? this.props.alwaysBounceVertical
        : !this.props.horizontal;

    const DEPRECATED_sendUpdatedChildFrames = !!this.props
      .DEPRECATED_sendUpdatedChildFrames;

    const baseStyle =
      this.props.horizontal === true
        ? styles.baseHorizontal
        : styles.baseVertical;
    const props = {
      ...this.props,
      alwaysBounceHorizontal,
      alwaysBounceVertical,
      style: [baseStyle, this.props.style],
      // Override the onContentSizeChange from props, since this event can
      // bubble up from TextInputs
      onContentSizeChange: null,
      onLayout: this._handleLayout,
      onMomentumScrollBegin: this._scrollResponder
        .scrollResponderHandleMomentumScrollBegin,
      onMomentumScrollEnd: this._scrollResponder
        .scrollResponderHandleMomentumScrollEnd,
      onResponderGrant: this._scrollResponder
        .scrollResponderHandleResponderGrant,
      onResponderReject: this._scrollResponder
        .scrollResponderHandleResponderReject,
      onResponderRelease: this._scrollResponder
        .scrollResponderHandleResponderRelease,
      onResponderTerminationRequest: this._scrollResponder
        .scrollResponderHandleTerminationRequest,
      onScrollBeginDrag: this._scrollResponder
        .scrollResponderHandleScrollBeginDrag,
      onScrollEndDrag: this._scrollResponder.scrollResponderHandleScrollEndDrag,
      onScrollShouldSetResponder: this._scrollResponder
        .scrollResponderHandleScrollShouldSetResponder,
      onStartShouldSetResponder: this._scrollResponder
        .scrollResponderHandleStartShouldSetResponder,
      onStartShouldSetResponderCapture: this._scrollResponder
        .scrollResponderHandleStartShouldSetResponderCapture,
      onTouchEnd: this._scrollResponder.scrollResponderHandleTouchEnd,
      onTouchMove: this._scrollResponder.scrollResponderHandleTouchMove,
      onTouchStart: this._scrollResponder.scrollResponderHandleTouchStart,
      onTouchCancel: this._scrollResponder.scrollResponderHandleTouchCancel,
      onScroll: this._handleScroll,
      scrollBarThumbImage: resolveAssetSource(this.props.scrollBarThumbImage),
      scrollEventThrottle: hasStickyHeaders
        ? 1
        : this.props.scrollEventThrottle,
      sendMomentumEvents:
        this.props.onMomentumScrollBegin || this.props.onMomentumScrollEnd
          ? true
          : false,
      DEPRECATED_sendUpdatedChildFrames,
      // default to true
      snapToStart: this.props.snapToStart !== false,
      // default to true
      snapToEnd: this.props.snapToEnd !== false,
      // pagingEnabled is overridden by snapToInterval / snapToOffsets
      pagingEnabled: Platform.select({
        // on iOS, pagingEnabled must be set to false to have snapToInterval / snapToOffsets work
        ios:
          this.props.pagingEnabled === true &&
          this.props.snapToInterval == null &&
          this.props.snapToOffsets == null,
        // on Android, pagingEnabled must be set to true to have snapToInterval / snapToOffsets work
        android:
          this.props.pagingEnabled === true ||
          this.props.snapToInterval != null ||
          this.props.snapToOffsets != null,
      }),
    };

    const {decelerationRate} = this.props;
    if (decelerationRate != null) {
      props.decelerationRate = processDecelerationRate(decelerationRate);
    }

    const refreshControl = this.props.refreshControl;

    if (refreshControl) {
      if (Platform.OS === 'ios') {
        // On iOS the RefreshControl is a child of the ScrollView.
        // tvOS lacks native support for RefreshControl, so don't include it in that case
        return (
          /* $FlowFixMe(>=0.117.0 site=react_native_fb) This comment suppresses
           * an error found when Flow v0.117 was deployed. To see the error,
           * delete this comment and run Flow. */
          <ScrollViewClass {...props} ref={this._setNativeRef}>
            {Platform.isTV ? null : refreshControl}
            {contentContainer}
          </ScrollViewClass>
        );
      } else if (Platform.OS === 'android') {
        // On Android wrap the ScrollView with a AndroidSwipeRefreshLayout.
        // Since the ScrollView is wrapped add the style props to the
        // AndroidSwipeRefreshLayout and use flex: 1 for the ScrollView.
        // Note: we should split props.style on the inner and outer props
        // however, the ScrollView still needs the baseStyle to be scrollable
        const {outer, inner} = splitLayoutProps(flattenStyle(props.style));
        return React.cloneElement(
          refreshControl,
          {style: [baseStyle, outer]},
          <ScrollViewClass
            {...props}
            style={[baseStyle, inner]}
            ref={this._setNativeRef}>
            {contentContainer}
          </ScrollViewClass>,
        );
      }
    }
    return (
      <ScrollViewClass {...props} ref={this._setNativeRef}>
        {contentContainer}
      </ScrollViewClass>
    );
  }
}

const styles = StyleSheet.create({
  baseVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    overflow: 'scroll',
  },
  baseHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  contentContainerHorizontal: {
    flexDirection: 'row',
  },
});

function Wrapper(props, ref) {
  return <ScrollView {...props} scrollViewRef={ref} />;
}
Wrapper.displayName = 'ScrollView';
const ForwardedScrollView = React.forwardRef(Wrapper);

// $FlowFixMe Add static context to ForwardedScrollView
ForwardedScrollView.Context = Context;

ForwardedScrollView.displayName = 'ScrollView';

module.exports = ((ForwardedScrollView            )                          
                                         
              
                                                      
                                   
      
   
                            );
