import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import NavBar from '../common/navBar';
import Button from '../common/button';
import { border } from '../../helpers/scaffolding';
import { postMessage } from '../../helpers/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10
  },
  textInput: {
    height: 60,
    fontSize: 28,
  },
  textPreview: {
    padding: 10,
    fontSize: 18
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
          .then((message) => {
            this.props.route.callback();
            this.props.navigator.pop();
          })
          .catch(err => console.log(err));
      })
  }

  render() {

    return (
      <View style={ styles.container }>
        <NavBar
          navigator={ this.props.navigator }
        />
        <TextInput
          style={ styles.textInput }
          placeholder='Type here'
          onChangeText={ (text) => this.setState({ text }) }
        />
        <Text style={ styles.textPreview }>
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
