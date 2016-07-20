import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from '../message/view';
import { border } from '../../../helpers/scaffolding';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.listOfMessages = this.listOfMessages.bind(this);
  }

  listOfMessages() {
    messages = messages || [];

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

    return messages.map(renderedMessage);
  }

  render() {
    return (
      <View style={ [ styles.container, border('red') ] }>
        <Text>Messages</Text>

        <View style={ styles.collection  }>
          { this.listOfMessages() }
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default Posts;
