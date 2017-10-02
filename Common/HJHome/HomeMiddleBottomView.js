/**
 * Created by MrHuang on 17/10/1.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//导入组件
var MiddleCommonView = require('./MiddleCommonView');

// 导入json数据
var JsonData = require('../../LocalData/XMG_Home_D4.json');


export default class HomeMiddleBottomView extends Component {

    static defaultProps = {
        // 回调函数
        popTopHome : null
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItems()}
                </View>
            </View>
        );
    }

    //下部分的所有数据
    renderBottomItems(){

        var ItemArr = [];

        // 拿到数据
        var ItemData = JsonData.data;

        for(var i = 0; i < ItemData.length;i++){
            //拿出单条数据
            var OneData = ItemData[i];

            ItemArr.push(
                <MiddleCommonView key ={i}
                     title={OneData.maintitle}
                     subTitle={OneData.deputytitle}
                     rightIcon={this.DealWithImageUrl(OneData.imageurl)}
                     titleColor={OneData.typeface_color}
                     tplurl={OneData.tplurl}
                     callBackClickcell={(data)=>this.popToTopView(data)}
                />
            )
        }
        return ItemArr;

    }

    // 往父级界面传递数据
    popToTopView(data){

        this.props.popTopHome(data);
    }

    // 处理图像的尺寸,因为后期的接口需要前端返回一个图片大小才给符合尺寸的图片接口。
    DealWithImageUrl(url){
        //检查url中是否包含'w.h'这两个字符
        if (url.search('w.h') == -1) { // -1 标示没有找到,正常返回
            return url;
        }else {                        // 找到了 则替换用图片的宽高替换'w.h'
            return url.replace('w.h','120.90');
        }
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
    },

    topViewStyle: {


    },

    bottomViewStyle: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        //justifyContent:'space-around',
    },

});

module.exports = HomeMiddleBottomView;
