import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from '../message/view';
import { border } from '../../helpers/scaffolding';
import { getMessages } from '../../helpers/api';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

var dummyMessages = [
  { user: 'Bronson', text: 'Nom nom nom', likes: -1 },
  { user: 'Fifo', text: 'First in, first out. I mean: Woof!', likes: -1 }
];

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(dummyMessages),
      errorMessage: ''
    }
  }

  componentWillMount() {
    getMessages()
      .then((json) => {
        console.log('----');
        console.log(json);
        return this.setState({ dataSource: ds.cloneWithRows(json) })
      })
      .catch((err) => this.setState({ errorMessage: err }) )
  }

  render() {
    var renderedMessage = ({ text, likes }, index) => {
      return (
        <Message
          text={ text }
          likes={ likes }
          key={ index }
        />
      );
    };

    return (
      <View style={ [ styles.container, border('blue') ] }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ renderedMessage }
        />
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
  }
});

export default MessageList;
