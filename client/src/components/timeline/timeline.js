import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from '../message/view';

var Timeline = ({ messages }) => {
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
    <View style={ styles.container }>
      <Text>Messages</Text>

      <View style={ styles.collection  }>
        { listOfMessages() }
      </View>
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
  collection: {

  },
  member: {

  }
});

export default Timeline;
