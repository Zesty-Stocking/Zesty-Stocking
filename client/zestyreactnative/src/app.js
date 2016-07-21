import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Signin from './components/authentication/signin';
import Posts from './components/timeline/posts';
import OAuthWebView from './components/webviews/oauthwebview';

import { border } from './helpers/scaffolding';

var ROUTES = {
  // keys with route name, maps to value of actual component to display
  signin: Signin,
  posts: Posts,
  oauthwebview: OAuthWebView
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  renderScene(route, navigator) {
    var Comp = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Comp route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={ [ styles.container, border('yellow') ] }
        initialRoute={ { name: 'signin' } }
        renderScene={ this.renderScene }
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
