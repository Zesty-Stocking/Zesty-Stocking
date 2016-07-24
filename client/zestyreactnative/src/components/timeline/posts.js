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
        <Text style={ styles.header}>Posts</Text>

        <View style={ styles.buttonContainer } >
          <Button
            style={ [ styles.button, border('olive') ] }
            text={ 'Compose' }
            onPress={ this.onPressCompose } />
        </View>

        <View>
          <MessageList />
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
