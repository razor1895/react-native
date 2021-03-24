/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *      
 */

'use strict';

const PickerAndroid = require('./PickerAndroid');
const PickerIOS = require('./PickerIOS');
const Platform = require('../../Utilities/Platform');
const React = require('react');
const UnimplementedView = require('../UnimplementedViews/UnimplementedView');

                                                               
                                                                 

const MODE_DIALOG = 'dialog';
const MODE_DROPDOWN = 'dropdown';

                                   
     
                                   
     
                

     
                                                                     
                                                          
     
                             

     
                               
                      
     
                     

     
                                                 
     
                  
    

/**
 * Individual selectable item in a Picker.
 */
                         
class PickerItem extends React.Component                  {
  render() {
    // The items are not rendered directly
    throw null;
  }
}

                               
                        
                         

     
                                                                             
     
                                     

     
                                                                                         
                                                                    
                                                                   
     
                                                                            

     
                                                                                           
               
                      
     
                     

     
                                                                                               
    
                                                            
                                                                 
    
                      
     
                                  

     
                                               
                  
     
                             

     
                                  
                      
     
                               

     
                                                                                              
                      
     
                   

     
                                                  
     
                   
     
                                                                                                            
     
                               
    

/**
 * Renders the native picker component on iOS and Android. Example:
 *
 *     <Picker
 *       selectedValue={this.state.language}
 *       onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
 *       <Picker.Item label="Java" value="java" />
 *       <Picker.Item label="JavaScript" value="js" />
 *     </Picker>
 */
class Picker extends React.Component              {
  /**
   * On Android, display the options in a dialog.
   */
  static MODE_DIALOG                              = MODE_DIALOG;

  /**
   * On Android, display the options in a dropdown (this is the default).
   */
  static MODE_DROPDOWN                                = MODE_DROPDOWN;

  static Item                    = PickerItem;

  static defaultProps                                        = {
    mode: MODE_DIALOG,
  };

  render()             {
    if (Platform.OS === 'ios') {
      /* $FlowFixMe(>=0.81.0 site=react_native_ios_fb) This suppression was
       * added when renaming suppression sites. */
      return <PickerIOS {...this.props}>{this.props.children}</PickerIOS>;
    } else if (Platform.OS === 'android') {
      return (
        /* $FlowFixMe(>=0.81.0 site=react_native_android_fb) This suppression
         * was added when renaming suppression sites. */
        <PickerAndroid {...this.props}>{this.props.children}</PickerAndroid>
      );
    } else {
      return <UnimplementedView />;
    }
  }
}

module.exports = Picker;
