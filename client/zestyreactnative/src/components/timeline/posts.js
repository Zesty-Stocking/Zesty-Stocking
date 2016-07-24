import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageList from '../message/messageList';
import Button from '../common/button';
import { getMessages } from '../../helpers/api';

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: -1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: -1 }
];

class Posts extends Component {
  constructor(props) {
    super(props);
    this.updateMessages = this.updateMessages.bind(this);
    this.onPressCompose = this.onPressCompose.bind(this);
    // the footer component uses `this`, best to bind it here.
    this.footer = this.footer.bind(this);

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

  footer() {
    return (
      <View style={ styles.footer } >
        <Button
          style={ styles.button }
          text={ 'Compose' }
          onPress={ this.onPressCompose } />
      </View>
    );
  }

  onPressCompose() {
    var route = {
      name: 'messageComposer',
      callback: this.updateMessages
    };

    this.props.navigator.push(route);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <MessageList
            data={ this.state.data }
            error={ this.state.error }
          />
        </View>
        { this.footer() }
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    marginBottom: 10
  }
});

export default Posts;
