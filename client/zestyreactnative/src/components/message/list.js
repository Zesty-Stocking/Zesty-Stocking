import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from '../message/view';
import { border } from '../../helpers/scaffolding';

class MessageList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.messages),
    }
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
