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
    TouchableOpacity,
    AlertIOS,

} from 'react-native';

var Dimensions = require('Dimensions');
var kWidth = Dimensions.get('window').width;

export default class MiddleCommonView extends Component {

    static defaultProps = {

        title:'',        // 标题
        subTitle:'',     // 子标题
        rightIcon:'',    // 右侧图片
        titleColor:''   //  字体颜色
    }



    render() {
        return (
         <TouchableOpacity activeOpacity={0.8} onPress={()=>{alert('跳转到相关界面')}}>
             <View style={styles.container}>
                {/*左边*/}
               <View>
                  <Text style={[{color:this.props.titleColor},styles.titlesStyle]}>{this.props.title}</Text>
                  <Text style={styles.SubTitleStyle}>{this.props.subTitle}</Text>
               </View>
                {/*右边图片*/}
                <Image source={{uri:this.props.rightIcon}} style={styles.iconStyles}/>
            </View>
         </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:kWidth * 0.5 - 1,
        height:59,
        marginBottom:1,
        marginRight:1,
        //改变主轴方向
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    titlesStyle: {
        fontSize:20,
        fontWeight:'bold',
    },
    SubTitleStyle: {
        color:'gray',
    },
    iconStyles: {
        width:64,
        height:44,
        //图片显示模式
        resizeMode:'contain'
    },
});

module.exports = MiddleCommonView;
