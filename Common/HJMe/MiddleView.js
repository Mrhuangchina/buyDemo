/**
 * Created by MrHuang on 17/9/30.
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
// 导入数据
var MiddleData = require('./MiddleData.json');

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class MiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.allItems()}
            </View>
        );
    }

    // 所有的items
    allItems() {

        var ItemArr = [];
        //遍历
        for(var i = 0; i < MiddleData.length; i++) {
            // 取出单个对象
            var Itemdata = MiddleData[i];
            ItemArr.push(
                <InnerView key={i} iconName={Itemdata.iconName} title={Itemdata.title} />
            )
        }
        // 返回数组
    return ItemArr;
    }
}

// 创建里面组件的类
class InnerView extends React.Component {

    static defaultProps = {

        iconName:'',
        title:'',

        }

    render() {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(this.props.title)}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri:this.props.iconName}} style={styles.ImageStyles}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-around',
    },

    innerViewStyle: {
        width:width/4,
        height:70,
        marginBottom:3,

        alignItems:'center',
        justifyContent:'center',
    },

    ImageStyles: {
        width:40,
        height:30,
        marginBottom:3,
    },
});

module.exports = MiddleView;
