import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  // Text,
  View
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
import { border } from '../../helpers/scaffolding';

export default class Message extends Component {

    constructor(props) {
      super(props);
      if (this.props.User) {
        this.username = this.props.User.username;
        this.name = this.props.User.name;
        this.location = this.props.User.location;
        this.avatarUrl = this.props.User.avatarUrl;
      }
    }

    render() {
      return (
        <View>
            <Card>
              <CardItem>
                <Thumbnail 
                  style={ styles.photo }
                  source={{uri: this.props.avatarUrl}} />
                <Text style={{fontWeight: 'bold'}}>{this.props.name ? this.props.name : this.props.username}</Text>
                <Text note>{ `@${this.props.username}` }</Text>
                <Text note>{this.props.createdAt}</Text>
              </CardItem>

              <CardItem style={styles.messagebox}>
                <Text>
                  {this.props.text}
                </Text>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="ios-heart" />
                  { `${this.props.likes} groks` }
                </Button>
              </CardItem>
           </Card>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  messagebox: {
    backgroundColor: '#F5FCFF'
  },
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginBottom: 5
  },
  left: {
    padding: 5,
    alignItems: 'center',
    flex: 1
  },
  right: {
    padding: 5,
    flex: 5
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 4,
  },
  rightTop: {
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  rightMiddle: {

  },
  rightBottom: {
    alignItems: 'flex-end',
  },
});

export default Message;
