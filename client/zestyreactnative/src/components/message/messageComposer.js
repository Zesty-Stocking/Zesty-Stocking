import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Button from '../common/button';
import { border } from '../../helpers/scaffolding';
import { postMessage } from '../../helpers/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

class MessageComposer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.onPressSend = this.onPressSend.bind(this);
  }

  onPressSend() {
    // attempt to retreive access token from device storage
    AsyncStorage.getItem('accessToken')
      .then(accessToken => {
        // then send along that token with the text of the message
        var text = this.state.text;

        postMessage(text, accessToken)
          .then(message => this.props.navigator.pop())
          .catch(err => console.log(err));
      })
  }

  render() {
    return (
      <View style={ { padding: 10 } }>
        <TextInput
          style={ { height: 40 } }
          placeholder='Type here'
          onChangeText={ (text) => this.setState({ text }) }
        />
        <Text style={{padding: 10, fontSize: 42}}>
          { this.state.text }
        </Text>

        <Button
          text={ 'Send' }
          onPress={ this.onPressSend }
        />
      </View>
    );
  }
}

export default MessageComposer;
