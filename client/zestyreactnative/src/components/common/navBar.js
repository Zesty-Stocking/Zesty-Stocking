import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

const defaults ={
  tintColor: '#333'
};

const defaultTitle = {
  title: 'hashItOut',
  tintColor: defaults.tintColor
};

// If there are Scenes to 'pop', then add a 'back' button.
var _defaultLeftButton = (props) => {
  var currentRoutes = props.navigator.getCurrentRoutes();

  if (currentRoutes.length > 1) {
    return {
      title: '<=',
      tintColor: defaults.tintColor,
      handler: () => props.navigator.pop()
    };
  }
};

/**
 * Note: pass this component the navigator from the parent component
 * if you do not wish to override the default 'Back' button.
 */
var NavBar = (props) => {
  var title = props.title || defaultTitle;
  var leftButton = props.leftButton || _defaultLeftButton(props);

  return (
    <NavigationBar
      title={ title }
      leftButton={ leftButton }
    />
  );
};

export default NavBar;
