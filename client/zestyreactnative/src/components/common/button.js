import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

/**
 * @param otherStyles, { Object }, allow a parent component to pass in styles
 */
var Button = ({ text, onPress, disabled, style }) => {
  return (
    <TouchableHighlight
      style={ [ styles.button, style ] }
      underlayColor={ 'gray' }
      onPress={ onPress }
      disabled={ disabled || false }
    >
      <Text style={ styles.buttonText }>{ text }</Text>
    </TouchableHighlight>
  );
};

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#0f0f0f',
    marginTop: 10,
    backgroundColor: 'white'
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});

export default Button;
