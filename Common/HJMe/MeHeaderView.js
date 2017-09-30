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
} from 'react-native';


var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
export default class MeHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    }
    // 头像 昵称 界面
    renderTopView(){
        return(

            <View style={styles.topViewStyle}>
                <TouchableOpacity  activeOpacity={1.0} onPress={()=>{alert('跳转到修改个人资料!')}}>
                <View style={styles.RightViewStyle}>
                    <Image source={{uri:'new_friend'}} style={styles.leftIconStyle} />
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>XX电商</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}} />
                 </View>
                 </TouchableOpacity>
                <View>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}} />
                </View>

            </View>


        )
    }

    renderBottomView(){
        return(
           <View style={styles.BottomViewStyle}>
                {this.BottomItems()}
            </View>
        )

    }

    BottomItems() {
        var ItemArr = [];
        // 数据
        var ItemData = [{'number':'50',
                         'title' :'购物券'
                        },

                        {'number':'100',
                         'title' :'评价'
                        },

                        {'number':'28',
                         'title' :'收藏'
                        }];
        // 遍历
        for(var i = 0;i < ItemData.length;i++){
            // 取出每一条数组
            var OneItemData = ItemData[i];

            ItemArr.push(
                <TouchableOpacity key = {i} activeOpacity={0.5} onPress={()=>{alert('跳到'+OneItemData.title+'界面')}}>
                  <View style={styles.BottomInnerViewStyle}>
                      <Text style={{color:'white'}}>{OneItemData.title}</Text>
                      <Text style={{color:'white'}}>{OneItemData.number}</Text>

                  </View>
                </TouchableOpacity>
            )

        }
        return ItemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        height:160,
        backgroundColor:'rgb(255,96,0)'
    },

    topViewStyle:{
        flexDirection:'row',
        marginTop:40,
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
        marginLeft:20,
        marginRight:20,
    },
    RightViewStyle: {
        flexDirection:'row',
        alignItems:'center',
    },

    BottomViewStyle: {
        flexDirection:'row',
        // 绝对定位
        position:'absolute',
        bottom:0,

    },

    BottomInnerViewStyle: {
        width:(screenW/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'

    },
});

module.exports = MeHeaderView;
