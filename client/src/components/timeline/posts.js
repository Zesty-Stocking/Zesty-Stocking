import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';

class Posts extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome to the timeline!</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}
});

export default Posts