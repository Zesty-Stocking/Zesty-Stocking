import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageList from '../message/messageList';
import NavBar from '../common/navBar';
import Button from '../common/button';
import { getMessages } from '../../helpers/api';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.onPressCompose = this.onPressCompose.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.state = {
      data: [],
      error: ''
    }
  }

  componentWillMount() {
    this.updateMessages();
  }

  onPressCompose() {
    this.props.navigator.push({name: 'messageComposer', callback: this.updateMessages });
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
    var leftButton = {
      title: 'Sign Out',
      tintColor: '#333',
      handler: () => console.log('Tried to sign out')
    };

    return (
      <View style={ styles.container }>
        <NavBar
          navigator={ this.props.navigator }
          leftButton={ leftButton }
        />
        <Text style={ styles.header}>Posts</Text>

        <View style={ styles.buttonContainer } >
          <Button
            style={ styles.button }
            text={ 'Compose' }
            onPress={ this.onPressCompose } />
        </View>

        <View>
          <MessageList data={this.state.data} error={this.state.error} />
        </View>
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 32,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    marginBottom: 10
  }
});

export default Posts;
