import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/button';

//This is where we put our backend oauth endpoint url
const OAuthURL = 'http://localhost:4568/auth/github';
// const OAuthURL = 'http://github.com';


class Signin extends Component {

	constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  render () {
		return (
      <Image
        source={require('../../assets/coderain.gif')}
        style={{flex: 1, width: null, height: null}}
        resizeMode='cover'>
  			<View style={styles.container}>
  				<Text style={styles.title}>Zesty Stocking</Text>
  				<Button style={styles.button} text={'Sign in with Github'} onPress={this.onPress} />
  			</View>
      </Image>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    backgroundColor: 'white'
  }
});

export default Signin;
