import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from '../message/view';
import { border } from '../../../helpers/scaffolding';

var Posts = ({ messages }) => {
  var renderedMessage = ({ user, text, likes }, index) => {
    return (
      <Message
        user={ user }
        text={ text }
        likes={ likes }
        key={ index }
        style={ styles.member }
      />
    );
  };

  var listOfMessages = () => {
    messages = messages || [];
    return messages.map(renderedMessage);
  };

  return (
    <View style={ [ styles.container, border('red') ] }>
      <Text>Messages</Text>

      <View style={ styles.collection  }>
        { listOfMessages() }
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default Posts
