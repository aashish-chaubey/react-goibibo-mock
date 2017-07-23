/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashPage from './SplashPage.js';
import MainPage from './MainPage.js';
import Bus from './Bus.js';
import BusList from './BusList.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';

export default class goibibo extends Component {
  render() {
    const routes = [
      {title: 'SplashPage', index: 0},
      {title: 'MainPage', index: 1},
      {title: 'Bus', index: 2},
      {title: 'BusList', index: 3}
    ];
    return (
      <Navigator
        initialRoute = {routes[0]}
        initialRouteStack = {routes}
        renderScene = {this.renderScene.bind(this)}
        configureScene = {(route) => {
          if(route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
          navigator={navigator} />
      );
    }
    if (routeId === 'Bus') {
      return (
        <Bus
          navigator={navigator} />
      );
    }
    if (routeId === 'BusList') {
      return (
        <BusList
          navigator={navigator} />
      );
    }
    return this.noRoute(navigator);
  }

  noRoute(navigator) {
    return(
      <SplashPage
        navigator = {navigator} />
    );
  }

}

AppRegistry.registerComponent('goibibo', () => goibibo);