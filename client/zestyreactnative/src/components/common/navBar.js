import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

const defaults ={
  tintColor: '#333'
};

const defaultTitle = {
  title: 'hashItOut',
  tintColor: defaults.tintColor
};

const defaultLeftButton = {
  title: '<=',
  tintColor: defaults.tintColor
};

const defaultRightButton = {
  title: '=>',
  tintColor: defaults.tintColor
};

var NavBar = (props) => {
  var titleConfig = props.title || defaultTitle;
  var leftButtonConfig = props.leftButton || defaultLeftButton;
  var rightButtonConfig = props.rightButton || defaultRightButton;

  return (
    <NavigationBar
      title={ titleConfig }
      leftButton={ leftButtonConfig }
      rightButton={ rightButtonConfig }
    />
  );
};

export default NavBar;
