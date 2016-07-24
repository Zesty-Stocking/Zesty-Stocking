import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageList from '../message/messageList';
import { getMessages } from '../../helpers/api';

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: -1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: -1 }
];

class Posts extends Component {
  constructor(props) {
    super(props);
    this.updateMessages = this.updateMessages.bind(this);
    this.state = {
      data: dummyMessages,
      error: ''
    }
  }

  componentWillMount() {
    this.updateMessages();
  }

  updateMessages() {
    console.log('getting new messages!');
    getMessages()
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((err) => this.setState({ error: err }) );
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <MessageList
            data={ this.state.data }
            error={ this.state.error }
            updateMessages={ this.updateMessages }
          />
        </View>
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default Posts;
