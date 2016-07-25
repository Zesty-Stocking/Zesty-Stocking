import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/button';
var myLocalIp = require('../../helpers/scaffolding.js').myLocalIp || 'localhost';
var prodHost = 'https://hashitout.herokuapp.com';

var host = process.env.JAWSDB_MARIA_URL ? prodHost : myLocalIp;
var port = process.env.PORT || '4568';

const OAuthURL = `http://${host}:${port}/auth/github`

class Signin extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  render() {
    return(
      <View style={ styles.container } >
        <Text style={styles.title}>#HashItOut</Text>
        <Image
          source={ require('../../assets/hashtag.png') }
          style={ styles.image }
          resizeMode='contain' 
        />
        <Button
          style={styles.button}
          text={'Sign in with GitHub'}
          onPress={this.onPress}
        />
      </View>
    );
  }
  onPress() {
    // Log the user in
    console.log('clicked!');
    this.props.navigator.push({name: 'oauthwebview', url: OAuthURL});
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    flex: 1,
    width: 250,
    height: 250
  },
  title: {
    fontSize: 40,
    fontWeight: '200',
    color: 'white'
  },
  button: {
    backgroundColor: 'white'
  }
});

export default Signin;
