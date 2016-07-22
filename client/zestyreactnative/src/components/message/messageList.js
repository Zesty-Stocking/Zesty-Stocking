import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from './message';
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

    this.renderMessage = this.renderMessage.bind(this);
  }

  componentWillMount() {
    getMessages()
      .then((json) => {
        return this.setState({ dataSource: ds.cloneWithRows(json) })
      })
      .catch((err) => this.setState({ errorMessage: err }) )
  }

  renderMessage({ user, text, likes }, index) {
    return (
      <Message
        user={ user }
        text={ text }
        likes={ likes }
        key={ index }
      />
    );
  }

  render() {
    return (
      <View style={ [ styles.container, border('blue') ] }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderMessage }
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
