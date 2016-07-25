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
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <View style={ styles.container }>
        <NavBar
          navigator={ this.props.navigator }
          title={ title }
          leftButton={ leftButton }
        />

        <ScrollView style={ styles.container }>

          <View style={{ flex: 1 }}>
            <Spinner visible={this.state.visible} />
          </View>

          <View>
            <MessageList data={this.state.data} error={this.state.error} />
          </View>

        </ScrollView>
        <View >
          <ActionButton 
            offsetY={30}
            style={styles.actionButton}
            >
            <ActionButton.Item
              buttonColor="rgba(231,76,60,1)"
              onPress={this.onPressCompose}
            >
              <Icon 
                style={styles.actionButtonIcon}
                name="md-create" /> 
            </ActionButton.Item>
          </ActionButton>
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
  actionButton: {
    // paddingBottom: 20  
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

export default Posts;
