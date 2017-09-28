/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引入LaunchView
var LaunchView = require('./Common/HJMain/LaunchView');
// 引入Navigator
import  {Navigator} from 'react-native-deprecated-custom-components';

export default class buyDemo extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{
              name: '启动页',
              component:LaunchView}}

            // configureScene={()=>{
            //                 return Navigator.SceneConfigs.PushFromRight;
            //             }}

            renderScene={(route, navigator) =>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />
            }}
        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('buyDemo', () => buyDemo);
