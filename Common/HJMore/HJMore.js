/**
 * Created by MrHuang on 17/9/28.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    AlertIOS,
    ScrollView,
} from 'react-native';

// 引入cell组件
var Cell = require('./MoreCell');

export default class HJMore extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
            <ScrollView>
                <View style={{marginTop:20}}>
                    <Cell
                        title="扫一扫"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Cell
                        title="省流量模式"
                        isSwitch={true}
                    />
                    <Cell
                        title="扫一扫"
                    />
                    <Cell
                        title="扫一扫"
                    />
                    <Cell
                        title="扫一扫"
                    />
                    <Cell
                        title="清空缓存"
                        Righttitle="1.99M"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Cell
                        title="扫一扫"
                    />
                    <Cell
                        title="扫一扫"
                    />
                    <Cell
                        title="扫一扫"
                    />
                </View>
             </ScrollView>

            </View>
        );
    }

    renderNavBar() {

        return(
            <View style={styles.NavBatstyle}>
                <Text style={styles.TitleStyle}>更多</Text>
                <TouchableOpacity style={styles.settingPositionStyle} onPress={()=>{alert('设置按钮被点击')}}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.ImagesIconStyle}/>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },

    NavBatstyle: {
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },

    TitleStyle: {
        color:'white',
        fontSize:20,
    },

    settingPositionStyle: {

        position:'absolute',
        right:10,
        bottom:15,
    },

    ImagesIconStyle: {

        width:Platform.OS === 'ios' ? 28 : 24,
        height:Platform.OS === 'ios' ? 28 : 24,
    },
});

module.exports = HJMore;
