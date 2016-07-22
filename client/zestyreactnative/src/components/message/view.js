import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { border } from '../../helpers/scaffolding';

var Message = ({ user, text, likes }) => {
  var { username, name, location, avatarUrl } = user;

  // https://facebook.github.io/react-native/docs/images.html#network-images
  return (
    <View style={ [ styles.container, border('purple') ] }>
      <View style={ styles.user }>
        <Image
          source={ {uri: avatarUrl} }
          style={{width: 40, height: 40}}
        />
        <Text>{ username }</Text>
        <Text>{ name }</Text>
        <Text>{ location }</Text>
      </View>
      <View style={ [ styles.text, border('red') ] } >
        <Text>{ text }</Text>
      </View>
      <View style={ border('orange') } >
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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 12,
    fontSize: 16,
  },
  likes: {
    // textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default Message;
