import React, {Component} from 'react';
import {
	WebView,
	StyleSheet,
	View
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class OAuthWebView extends Component {
	render() {

		var leftButtonConfig = {
		    title: 'Back',
		    handler: this.onBackPress.bind(this)
		  };

		var titleConfig = {
		    title: 'Sign in with Github',
		  };

		return (
			<View style={{flex: 1}}>
				<NavigationBar
					title={titleConfig}
        			leftButton={leftButtonConfig} />
				<WebView
					source={{uri: this.props.route.url}}
					style={styles.webview} 
					onNavigationStateChange={this.onNavigationStateChange.bind(this)} />
			</View>
			
		);
	}
	onNavigationStateChange(navState) {
		//This is where we check whether the url is our payload url
	 	// if so, we exit webview and log in the user
	 	console.log('loading new page');
		console.log(navState);

	}
	onBackPress() {
		// alert('go back!');
		this.props.navigator.pop();
	}
}

const styles = StyleSheet.create({
	webview: {
		// marginTop: 20
	},
});

export default OAuthWebView;