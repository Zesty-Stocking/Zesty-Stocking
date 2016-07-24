import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Message from './message';
import Button from '../common/button';
import { getMessages } from '../../helpers/api';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.onPressCompose = this.onPressCompose.bind(this);
    // the footer component uses `this`, best to bind it here.
    this.footer = this.footer.bind(this);
  }

  render() {
    return (
      <View style={ [ styles.container ] }>
        <ListView
          style={ styles.body }
          dataSource={ ds.cloneWithRows(this.props.data) }
          renderHeader={ this.header }
          renderRow={ this.renderMessage }
          renderSeparator={ this.separator }
          renderFooter={ this.footer }
        />
      </View>
    );
  }

  onPressCompose() {
    var route = {
      name: 'messageComposer',
      callback: this.props.updateMessages
    };

    this.props.navigator.push(route);
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

  header() {
    return(
      <View>
        <Text style={ styles.headerText }>Posts</Text>
      </View>
    );
  }

  separator(sectionId, rowId) {
    return (
      <View
        key={ `${sectionId}:${rowId}` }
        style={ styles.separator }
      />
    );
  }

  footer() {
    return (
      <View style={ styles.footer } >
        <Button
          style={ styles.button }
          text={ 'Compose' }
          onPress={ this.onPressCompose } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 32,
    textAlign: 'center'
  },
  body: {
    // a specific height is needed to get Android to scroll!
    // http://stackoverflow.com/a/32880205/2908123
    height: 500,
  },
  separator: {
    marginTop: 5,
    marginBottom: 5,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#333'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    marginBottom: 10
  }
});

export default MessageList;
