/**
 * Created by MrHuang on 17/9/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

// 引入外部组件
var Main = require('./HJMain');

export default class LaunchView extends Component {
    render() {
        return (
          <Image source={{uri:'launchimage'}} style={styles.launchimageStyle}/>
        );
    }

    componentDidMount(){
        //设置2秒后跳转到Main界面
        setTimeout(()=> {
            this.props.navigator.replace({
               component: Main
            })
        },2000)

    }
}



const styles = StyleSheet.create({
    launchimageStyle: {
        flex: 1,

    },
});

module.exports = LaunchView;