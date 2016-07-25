import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import MessageList from '../message/messageList';
import Button from '../common/button';
import { border } from '../../helpers/scaffolding';
import { getMessages } from '../../helpers/api';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.onPressCompose = this.onPressCompose.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.state = {
      data: [],
      error: '',
      visible: true
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
        this.setState({ data: json, visible: false });
      })
      .catch((err) => this.setState({ error: err }) );
  }

  render() {
    return (
      <ScrollView style={ [ styles.container, border('red') ] }>
        <Text style={ styles.header}>Posts</Text>

        <View style={ styles.buttonContainer } >
          <Button
            style={ [ styles.button, border('olive') ] }
            text={ 'Compose' }
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
    width: 150,
    marginBottom: 10
  }
});

export default Posts;
