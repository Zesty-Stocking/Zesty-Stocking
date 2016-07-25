import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from './message';
import { getMessages } from '../../helpers/api';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.renderMessage = this.renderMessage.bind(this);
  }
  
  renderMessage({ User, text, likes }, index) {
    return (
      <Message
        User={ User }
        text={ text }
        likes={ likes }
        key={ index }
      />
    );
  }

  render() {
    return (
      <View style={ [ styles.container ] }>
        <ListView
          dataSource={ ds.cloneWithRows(this.props.data) }
          renderRow={ this.renderMessage }
          enableEmptySections
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default MessageList;
