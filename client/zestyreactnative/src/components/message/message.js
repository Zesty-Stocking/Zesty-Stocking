import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { border } from '../../helpers/scaffolding';

var Message = ({ User, text, likes }) => {
  console.log('--- inside of Message');
  console.log(User);
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
      <View style={ [ styles.user, border('blue') ] }>
        <Image
          source={ {uri: avatarUrl} }
          style={{width: 40, height: 40}}
        />
        <Text>{ username }</Text>
        <Text>{ name }</Text>
        <Text>{ location }</Text>
      </View>
      <View style={ [ styles.text, border('green') ] } >
        <Text>{ text }</Text>
      </View>
      <View style={ [ styles.likes, border('purple') ] } >
        <Text style={ styles.likes }>
          { likes }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  user: {
      // color: '#333333',
    marginBottom: 5,
  },
  text: {
      // fontSize: 20,
    marginLeft: 12,
  },
  likes: {
    // textAlign: 'center',
      // color: '#333333',
    marginBottom: 5,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default Message;
