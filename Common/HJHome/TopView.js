/**
 * Created by MrHuang on 17/10/1.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
} from 'react-native';

//屏幕宽度
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;


var TopListView = require('./TopListView');

// 导入JSON数据
var TopMenu = require('../../LocalData/TopMenu.json');

export default class TopView extends Component {

    //构造
    constructor(props) {
      super(props);
      this.state = {

          currentPage : 0,  //当前页码
      };
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    {/*显示内容部分*/}
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        //每一帧移动结束
                        onMomentumScrollEnd={(Scr)=>{this.ScrollEnd(Scr)}}

                    >
                        {this.renderScrollViewContent()}
                    </ScrollView>

                    {/*显示圆点指示器部分*/}
                    <View style={styles.circlestyle}>
                        {this.renderCircleCount()}
                    </View>
                </View>

            </View>
        );
    }
    //ScrollView内容
    renderScrollViewContent(){

        var ItemArr = [];

        // 数据
        var DataArr = TopMenu.data;

        for (var i =0; i<DataArr.length;i++){

            ItemArr.push(
                <TopListView key = {i}
                    // 传入dataSource数据
                    dataArr = {DataArr[i]}

                />
            )
        }
        //返回数组
     return ItemArr;

    }

    // 返回圆点
    renderCircleCount(){

        var CirclArr = [];
        //样式
        var style;

        for(var i = 0;i < TopMenu.data.length;i++){

            style = (i == this.state.currentPage) ? {color:'orange'} : {color:'gray'};

            CirclArr.push(
                <Text key = {i} style={[{fontSize:25},style]}>•</Text>
            )
        }
    return CirclArr;
    }
     // 每一帧移动结束之后
    ScrollEnd(Scr){
        // 水平方向偏移量
        const OffSetX = Scr.nativeEvent.contentOffset.x;
        // 页码
        PageCount = OffSetX / screenW;

        // 刷新状态机
        this.setState ({

            currentPage : PageCount

        })


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
    },

    circlestyle: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.1)'
    },

});

module.exports = TopView;

