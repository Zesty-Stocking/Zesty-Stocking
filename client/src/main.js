import React, {Component} from 'react';
import {
	StyleSheet,
	Navigator
} from 'react-native';
import Signin from './components/authentication/signin';
import Posts from './components/timeline/posts';

var ROUTES = {
	// keys with route name, maps to value of actual component to display
	signin: Signin,
	posts: Posts
}

class Main extends Component {

	renderScene(route, navigator) {
		var Comp = ROUTES[route.name]; // ROUTES['signin'] => Signin
		return <Comp route={route} navigator={navigator} />;
	}

	render () {
		return (
			<Navigator
			style={styles.container}
			initialRoute={{name: 'signin'}}
			renderScene={this.renderScene}
			configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		// dont need these for navigator
		// justifyContent: 'center',
		// alignItems: 'center'
	}
});

export default Main;