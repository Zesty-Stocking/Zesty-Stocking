import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { border } from '../../helpers/scaffolding';

var Message = ({ User, text, likes }) => {
  if (User) {
    var { username, name, location, avatarUrl } = User;
  } 
  // https://facebook.github.io/react-native/docs/images.html#network-images
  return (
    <View style={ [ styles.container, border('black') ] }>
      <View style={ styles.left }>
        <Image
          source={ { uri: avatarUrl } }
          style={ styles.photo }
        />
      </View>
      <View style={ styles.right }>
        <View style={ [ styles.rightTop ] }>
          <Text>{ `@${username}` } { location ? '| ' + location : '' }</Text>
        </View>
        <View style={ [ styles.rightMiddle ] } >
          <Text>{ text }</Text>
        </View>
        <View style={ [ styles.rightBottom ] } >
          <Text>
            Likes: { likes }
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 55,
    width: 55,
    borderRadius: 30,
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
