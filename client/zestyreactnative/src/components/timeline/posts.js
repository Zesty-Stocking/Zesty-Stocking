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
    this.renderListOfMessages = this.renderListOfMessages.bind(this);
  }

  renderMessage(message, index) {
    return (
      <Message
        user = {message.user}
        text = {message.text}
        likes = {message.likes}
        key = {index}
        style = {styles.member} />
    );
  }

  renderListOfMessages() {
    var messages = this.props.messages || [];
    return messages.map(this.renderMessage);
  }

  render () {
    return (
      <View style={[styles.container, border('red')]}>
        <Text>Messages</Text>

        <View style={styles.collection}>
          {this.renderListOfMessages()}
        </View>
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default Posts;
