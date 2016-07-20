import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../common/button';

class Signin extends Component {
  constructor(props) {
    super(props)

    this.onPressSignin = this.onPressSignin.bind(this);
  }

  onPressSignin() {
    console.log('clicked!');
    this.props.navigator.push({ name: 'posts' });
  }

  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Zesty Stocking</Text>
        <Button text={ 'Sign in with Github' } onPress={ onPressSignin } />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  },
});

export default Signin;
