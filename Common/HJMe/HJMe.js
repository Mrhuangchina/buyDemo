/**
 * Created by MrHuang on 17/9/28.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

// 导入Mycell组件
var MyCell = require('./MyCell');
var MiddleView = require('./MiddleView');

export default class HJMe extends Component {
    render() {
        return (
           <ScrollView style={{backgroundColor:'#e8e8e8'}}>
               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage="collect"
                       LeftTitle="我的订单"
                       RightTitle="查看全部订单"
                   />
               </View>
                {/*中间代付款功能模块*/}
                <MiddleView/>

               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage="draft"
                       LeftTitle="钱包"
                       RightTitle="账户余额:￥100.88"
                   />
                   <MyCell
                       LeftImage="like"
                       LeftTitle="抵用券"
                       RightTitle="10张"
                   />

               </View>

               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage="card"
                       LeftTitle="积分商城"
                   />
               </View>
               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage="new_friend"
                       LeftTitle="今日推荐"
                       RightImage="me_new"
                   />
               </View>
               <View style={{marginTop:10}}>
                   <MyCell
                       LeftImage="pay"
                       LeftTitle="我要合作"
                       RightTitle="轻松开店,招财进宝"
                   />
               </View>
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


});

module.exports = HJMe;
