import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from '../message/view';
import { border } from '../../../helpers/scaffolding';
// import { getMessages } from '../../../helpers/api';

var ipAddress = '10.6.24.5';
const baseUrl = `http://${ipAddress}:4568/api`;

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: -1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: -1 }
];

//var testFetch = (url) => {
//  return fetch(url, {
//    method: 'GET',
//    headers: {
//      'Accept': 'application/json',
//      'Content-Type': 'application/json',
//    },
//    body: null
//  })
//};

var getMessages = () => {
  var url = `${baseUrl}/messages`;

  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    })
    .catch(function(err) {
      return err;
    })
};

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
      .then((json) => {
        this.setState({ messages: json });
      })
      .catch((err) => {
        this.setState({ errorMessage: err });
      });
  }

  listOfMessages() {
    messages = this.state.messages || [];

    var renderedMessage = ({ text, likes }, index) => {
      return (
        <Message
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
    backgroundColor: 'white'
  }
});

export default Posts;
