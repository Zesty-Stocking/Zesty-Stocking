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
					// onLoadEnd={this.handlePageChange.bind(this)}
					onNavigationStateChange={this.onNavigationStateChange.bind(this)} />

			</View>

		);
	}

	// handlePageChange() {
	// 	console.log('loaded new page!');
	// 	console.dir(this);
	// 	console.log(this.props);
	// 	//This is where we check whether the url is our payload url
	// 	//if so, we exit webview and log in the user
	// }
	onNavigationStateChange(navState) {
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
