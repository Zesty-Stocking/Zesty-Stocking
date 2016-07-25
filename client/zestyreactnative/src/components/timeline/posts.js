import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import MessageList from '../message/messageList';
import NavBar from '../common/navBar';
import Button from '../common/button';
import { getMessages, getLogout } from '../../helpers/api';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
      visible: true
    }

    this.onPressCompose = this.onPressCompose.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
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
        this.setState({ data: json, visible: false });
      })
      .catch((err) => this.setState({ error: err }) );
  }

  logoutUser () {
    // save reference *outside* of the promise callback
    var navigator = this.props.navigator;

    getLogout()
      .then(function() {
        AsyncStorage.removeItem('accessToken');

        var routeStack = [
          { name: 'signin' }
        ];

        navigator.immediatelyResetRouteStack(routeStack);
      });
  };

  render() {
    var title = {
      title: 'Bytes',
      tintColor: '#333'
    };

    var leftButton = {
      title: 'Sign Out',
      tintColor: '#333',
      handler: () => this.logoutUser()
    };

    return (
      <ScrollView style={ styles.container }>
        <NavBar
          navigator={ this.props.navigator }
          title={ title }
          leftButton={ leftButton }
        />

        <View style={ styles.buttonContainer } >
          <Button
            style={ styles.button }
            text={ 'Compose a Byte' }
            onPress={ this.onPressCompose } />
        </View>

        <View style={{ flex: 1 }}>
          <Spinner visible={this.state.visible} />
        </View>

        <View>
          <MessageList data={this.state.data} error={this.state.error} />
        </View>
      </ScrollView>
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
    marginBottom: 10
  }
});

export default Posts;
