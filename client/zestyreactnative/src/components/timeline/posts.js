import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageList from '../message/messageList';
import Button from '../common/button';
import { border } from '../../helpers/scaffolding';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.onPressCompose = this.onPressCompose.bind(this);
  }

  onPressCompose() {
    this.props.navigator.push({ name: 'messageComposer' });
  }

  render() {
    return (
      <View style={ [ styles.container, border('red') ] }>
        <Text>Messages</Text>

        <Button
          style={ styles.button }
          text={ 'Write Message!' }
          onPress={ this.onPressCompose }
        />

        <View>
          <MessageList />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right'
  }
});

export default Posts;
