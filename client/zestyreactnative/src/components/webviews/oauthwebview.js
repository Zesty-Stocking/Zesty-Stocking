import React, {Component} from 'react';
import {
  WebView,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import NavBar from '../common/navBar';
var myLocalIp = require('../../helpers/scaffolding').myLocalIp || 'localhost';
var prodHost = 'https://hashitout.herokuapp.com';

var host = process.env.JAWSDB_MARIA_URL ? prodHost : myLocalIp;
var port = process.env.PORT || '4568';

const TOKEN_URL = `http://${host}:${port}/account?`

class OAuthWebView extends Component {
  render() {
    var leftButtonConfig = {
      title: 'Back',
      handler: this.onBackPress.bind(this)
    };

    var titleConfig = {
      title: 'Sign in with GitHub',
    };

    return (
      <View style={{flex: 1}}>
        <NavBar
          title={ titleConfig }
          leftButton={ leftButtonConfig }
        />
        <WebView
          source={{uri: this.props.route.url}}
          style={styles.webview}
          startInLoadingState={true}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)} />
      </View>
    );
  }
  onNavigationStateChange(navState) {
    //This is where we check whether the url is our payload url
    // if so, we exit webview and log in the user
    // console.log('loading new page');
    // console.log('navState object:', navState);
    //check URL and only do it when navstate.loading is false, meaning page is done loading
    if (navState.url.startsWith(TOKEN_URL) && navState.loading === false) {
      //grab access token
      var tokenIndex = navState.url.indexOf('accessToken=') + 12;
      var accessToken = navState.url.substring(tokenIndex, navState.url.length);
      //store accessToken in asyncStorage
      AsyncStorage.setItem('accessToken', accessToken)
        .then(() => {
          // console.log('set access token in async storage:', accessToken);
          //exit webview here -
          //we need to leave the context of authentication views (see udemy course, lecture 69)
          //reset route stack and push posts route on navigator
          this.props.navigator.immediatelyResetRouteStack([{ name: 'posts' }]);
          //If you need to get access token again after this, it should be stored in asyncStorage
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  onBackPress() {
    // alert('go back!');
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  webview: {
  },
});

export default OAuthWebView;
