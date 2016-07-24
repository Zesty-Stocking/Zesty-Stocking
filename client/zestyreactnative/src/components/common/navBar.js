import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

const defaults ={
  tintColor: '#333'
};

const defaultTitle = {
  title: 'hashItOut',
  tintColor: defaults.tintColor
};

var NavBar = (props) => {
  var defaultLeftButton = {
    title: '<=',
    tintColor: defaults.tintColor,
    handler: () => {
      props.navigator.pop();
    }
  };

  var title = props.title || defaultTitle;
  var leftButton = props.leftButton || defaultLeftButton;

  return (
    <NavigationBar
      title={ title }
      leftButton={ leftButton }
    />
  );
};

export default NavBar;
