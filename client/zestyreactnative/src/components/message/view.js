import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { border } from '../../helpers/scaffolding';

var Message = ({ user, text, likes }) => {
  return (
    <View style={ [ styles.container, border('green') ] }>
      <Text style={ styles.user }>
        { user }
      </Text>
      <Text style={ styles.text }>
        { text }
      </Text>
      <Text style={ styles.likes }>
        { likes }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  user: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  likes: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Message;
