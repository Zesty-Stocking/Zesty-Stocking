import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageList from '../message/list';
import { border } from '../../helpers/scaffolding';
import { getMessages } from '../../helpers/api';

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: -1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: -1 }
];

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: dummyMessages,
      errorMessage: ''
    };

    this.listOfMessages = this.listOfMessages.bind(this);
  }

  componentWillMount() {
    getMessages()
      .then((json) => this.setState({ messages: json }) )
      .catch((err) => this.setState({ errorMessage: err }) )
  }

  listOfMessages() {
    messages = this.state.messages || [];
    return (
      <MessageList messages={ messages } />
    );
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
    backgroundColor: 'white'
  }
});

export default Posts;
