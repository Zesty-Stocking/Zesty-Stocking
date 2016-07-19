import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from './message/view';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>
          Message
        </Text>
        <Message user={ 'Bronson' } text={ 'Nom nom nom' } likes={ 1 } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
