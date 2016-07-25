import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/button';
var myLocalIp = require('../../helpers/scaffolding.js').myLocalIp;

//This is where we put our backend oauth endpoint url
const host = myLocalIp || 'localhost';
const OAuthURL = `http://${host}:4568/auth/github`
// const OAuthURL = 'http://github.com';


class Signin extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  render() {
    return(
      <View style={ styles.container } >
        <View style={ [ styles.top ] } >
          <Image
            source={ require('../../assets/hashtag.png') }
            style={ styles.image }
            resizeMode='contain' />
        </View>
        <View style={ [ styles.bottom ] } >
          <Text style={styles.title}>#HashItOut</Text>
          <Button
            style={styles.button}
            text={'Sign in with GitHub'}
            onPress={this.onPress}
          />
        </View>
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
  },
  top: {
    flex: 5,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  bottom: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 250,
    height: 250
  },
  title: {
    fontSize: 20,
    fontWeight: '200',
    color: 'white'
  },
  button: {
    backgroundColor: 'white'
  }
});

export default Signin;
