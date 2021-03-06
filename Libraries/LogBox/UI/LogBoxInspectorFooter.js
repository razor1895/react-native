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
import DeviceInfo from '../../Utilities/DeviceInfo';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import View from '../../Components/View/View';
import LogBoxButton from './LogBoxButton';
import * as LogBoxStyle from './LogBoxStyle';

                         
                        
                         
                    
    

function LogBoxInspectorFooter(props       )             {
  if (props.level === 'syntax') {
    return (
      <View style={styles.root}>
        <View style={styles.button}>
          <Text style={styles.syntaxErrorText}>
            This error cannot be dismissed.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <FooterButton text="Dismiss" onPress={props.onDismiss} />
      <FooterButton text="Minimize" onPress={props.onMinimize} />
    </View>
  );
}

                               
                      
               
    

function FooterButton(props             )             {
  return (
    <LogBoxButton
      backgroundColor={{
        default: 'transparent',
        pressed: LogBoxStyle.getBackgroundDarkColor(),
      }}
      onPress={props.onPress}
      style={buttonStyles.safeArea}>
      <View style={buttonStyles.content}>
        <Text style={buttonStyles.label}>{props.text}</Text>
      </View>
    </LogBoxButton>
  );
}

const buttonStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: DeviceInfo.getConstants().isIPhoneX_deprecated ? 30 : 0,
  },
  content: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
  },
  label: {
    color: LogBoxStyle.getTextColor(1),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 20,
  },
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: LogBoxStyle.getBackgroundColor(1),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 2,
    shadowOpacity: 0.5,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  syntaxErrorText: {
    textAlign: 'center',
    width: '100%',
    height: 48,
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 20,
    paddingBottom: 50,
    fontStyle: 'italic',
    color: LogBoxStyle.getTextColor(0.6),
  },
});

export default LogBoxInspectorFooter;
