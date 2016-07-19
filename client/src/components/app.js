import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timeline from './timeline/timeline';
import { border } from '../../helpers/scaffolding';

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: 1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: 1 }
];

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: dummyMessages
    };
  }

  render() {
    return (
      <View style={ [ styles.container, border('yellow') ] }>
        <Timeline messages={ this.state.messages } />
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
