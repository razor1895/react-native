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

const Platform = require('../Utilities/Platform');
const React = require('react');
const VirtualizedSectionList = require('./VirtualizedSectionList');

                                                                             
             
                              
                                       
                             
                                  

                

                                                                   

                                                   
     
                                                                                                                      
    
                   
    
                                   
                                             
                                                                        
                                                                             
           
     
                                     
   

                                                   
     
                                                                                                 
     
                       
               
                  
                      
                 
                            
                              
                                                                              
         
      
       
                                  
     
                                                                                                  
                                                                                               
                                                       
     
                  
     
                                                                                                    
                                                                                                   
                                                               
     
                             
     
                                                                   
     
                      
     
                                                                                                  
                                                                                                
                                                                                                
                                                  
     
                                                      
     
                                                                                             
             
     
                                                                 
     
                                                                                        
    
                                                         
     
                                  
   

                                
           
                                          
     
                                                                               
                                  
                                              
                       
        
                                
                                              
                     
        
         
      
    
                             
                             
   

const defaultProps = {
  ...VirtualizedSectionList.defaultProps,
  stickySectionHeadersEnabled: Platform.OS === 'ios',
};

                                        

/**
 * A performant interface for rendering sectioned lists, supporting the most handy features:
 *
 *  - Fully cross-platform.
 *  - Configurable viewability callbacks.
 *  - List header support.
 *  - List footer support.
 *  - Item separator support.
 *  - Section header support.
 *  - Section separator support.
 *  - Heterogeneous data and item rendering support.
 *  - Pull to Refresh.
 *  - Scroll loading.
 *
 * If you don't need section support and want a simpler interface, use
 * [`<FlatList>`](https://reactnative.dev/docs/flatlist.html).
 *
 * Simple Examples:
 *
 *     <SectionList
 *       renderItem={({item}) => <ListItem title={item} />}
 *       renderSectionHeader={({section}) => <Header title={section.title} />}
 *       sections={[ // homogeneous rendering between sections
 *         {data: [...], title: ...},
 *         {data: [...], title: ...},
 *         {data: [...], title: ...},
 *       ]}
 *     />
 *
 *     <SectionList
 *       sections={[ // heterogeneous rendering between sections
 *         {data: [...], renderItem: ...},
 *         {data: [...], renderItem: ...},
 *         {data: [...], renderItem: ...},
 *       ]}
 *     />
 *
 * This is a convenience wrapper around [`<VirtualizedList>`](docs/virtualizedlist.html),
 * and thus inherits its props (as well as those of `ScrollView`) that aren't explicitly listed
 * here, along with the following caveats:
 *
 * - Internal state is not preserved when content scrolls out of the render window. Make sure all
 *   your data is captured in the item data or external stores like Flux, Redux, or Relay.
 * - This is a `PureComponent` which means that it will not re-render if `props` remain shallow-
 *   equal. Make sure that everything your `renderItem` function depends on is passed as a prop
 *   (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on
 *   changes. This includes the `data` prop and parent component state.
 * - In order to constrain memory and enable smooth scrolling, content is rendered asynchronously
 *   offscreen. This means it's possible to scroll faster than the fill rate and momentarily see
 *   blank content. This is a tradeoff that can be adjusted to suit the needs of each application,
 *   and we are working on improving it behind the scenes.
 * - By default, the list looks for a `key` prop on each item and uses that for the React key.
 *   Alternatively, you can provide a custom `keyExtractor` prop.
 *
 */
class SectionList                             extends React.PureComponent 
                  
       
  {
  props                 ;
  static defaultProps               = defaultProps;

  /**
   * Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section)
   * positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be
   * covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a
   * fixed number of pixels to offset the final target position, e.g. to compensate for sticky
   * headers.
   *
   * Note: cannot scroll to locations outside the render window without specifying the
   * `getItemLayout` prop.
   */
  scrollToLocation(params                            ) {
    if (this._wrapperListRef != null) {
      this._wrapperListRef.scrollToLocation(params);
    }
  }

  /**
   * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
   * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
   * taps on items or by navigation actions.
   */
  recordInteraction() {
    const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    listRef && listRef.recordInteraction();
  }

  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators() {
    const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    listRef && listRef.flashScrollIndicators();
  }

  /**
   * Provides a handle to the underlying scroll responder.
   */
  getScrollResponder()                       {
    const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      return listRef.getScrollResponder();
    }
  }

  getScrollableNode()      {
    const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      return listRef.getScrollableNode();
    }
  }

  setNativeProps(props        ) {
    const listRef = this._wrapperListRef && this._wrapperListRef.getListRef();
    if (listRef) {
      listRef.setNativeProps(props);
    }
  }

  render()             {
    return (
      <VirtualizedSectionList
        {...this.props}
        ref={this._captureRef}
        getItemCount={items => items.length}
        getItem={(items, index) => items[index]}
      />
    );
  }

  _wrapperListRef                                                  ;
  _captureRef = ref => {
    /* $FlowFixMe(>=0.99.0 site=react_native_fb) This comment suppresses an
     * error found when Flow v0.99 was deployed. To see the error, delete this
     * comment and run Flow. */
    this._wrapperListRef = ref;
  };
}

module.exports = SectionList;
