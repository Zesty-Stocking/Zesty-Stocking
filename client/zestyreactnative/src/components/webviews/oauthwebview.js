import React, {Component} from 'react';
import {
	WebView,
	StyleSheet
} from 'react-native';

class OAuthWebView extends Component {
	render() {
		return (
			<WebView
				source={{uri: 'https://github.com/facebook/react-native'}}
				style={styles.webview} />
		);
	}
}

const styles = StyleSheet.create({
	webview: {
		marginTop: 20
	},
});

export default OAuthWebView;