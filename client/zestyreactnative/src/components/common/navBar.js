import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

var NavBar = ({ titleConfig, leftButtonConfig }) => {
  return (
    <NavigationBar
      title={ titleConfig }
      leftButton={ leftButtonConfig } />
  );
};

export default NavBar;
