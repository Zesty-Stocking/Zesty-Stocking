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
  } else {
    var username = 'default username';
    var name = 'default name';
    var location = 'default location';
    var avatarUrl = 'default avatarUrl';
  }

  // https://facebook.github.io/react-native/docs/images.html#network-images
  return (
    <View style={ [ styles.container, border('black') ] }>
      <View style={ [ styles.left, border('blue') ] }>
        <Image
          source={ { uri: avatarUrl } }
          style={ styles.photo }
        />
      </View>
      <View style={ [ styles.right, border('red') ] }>
        <View style={ [ styles.user, border('orange') ] }>
          <Text>@{ username } | { location }</Text>
        </View>
        <View style={ [ styles.text, border('green') ] } >
          <Text>{ text }</Text>
        </View>
        <View style={ [ styles.likes, border('purple') ] } >
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
  user: {

  },
  text: {

  },
  likes: {
    alignItems: 'flex-end'
  },
});

export default Message;
