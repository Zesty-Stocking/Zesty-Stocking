import React, {Component} from 'react';
import {
	WebView,
	StyleSheet
} from 'react-native';

class OAuthWebView extends Component {
	render() {
		console.log(this.props);
		return (
			<WebView
				source={{uri: this.props.route.url}}
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