'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

class SplashPage extends Component {
  
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'MainPage',
      });
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff"}}>
        <Image 
          style = {{height: 84, width: 156}}
          source = {require('./ic_splash.png')} />
      </View>
    );
  }
}

module.exports = SplashPage;