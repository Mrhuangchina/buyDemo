/**
 * Created by MrHuang on 17/9/30.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    AlertIOS,
} from 'react-native';

export default class MyCell extends Component {

    static  defaultProps = {

        LeftTitle : '',     // 左侧标题
        LeftImage : '',     // 左侧图片
        RightTitle : '',    // 右侧标题
        RightImage : '',    // 右侧图片
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('被点击了!')}}>
              <View style={styles.cellStyles}>
                    {/*cell左侧内容*/}
                  <View style={styles.LeftViewStyle}>
                      <Image source={{uri:this.props.LeftImage}} style={styles.LeftImageStyle}/>
                      <Text style={styles.LeftTitleStyle}>{this.props.LeftTitle}</Text>
                  </View>
                     {/*cell右侧内容*/}
                  <View style={styles.RightViewStyle}>
                      {this.RightSubView()}
                  </View>

              </View>
            </TouchableOpacity>
        );
    }

    // cell右侧子视图
    RightSubView(){
        return(
            <View style={styles.RightViewStyle}>
                {this.renderRightImageOrTitle()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={styles.RightArrowStyle}/>
            </View>
        )
    }
     // 右侧显示图片或者标题
    renderRightImageOrTitle() {
        if(this.props.RightImage.length == 0) { // 不显示图片
            return(
                <Text style={styles.RightTitleStyle}>{this.props.RightTitle}</Text>
            )
        } else {
            return(
                <Image source={{uri:this.props.RightImage}} style={styles.RightImageStyle}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    cellStyles: {
        height:Platform.OS == 'ios' ? 40 :30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',

        //下边框
        borderBottomColor:'#E8E8E8',
        borderBottomWidth:0.5,
    },

    LeftViewStyle: {
        flexDirection:'row',
        alignItems:'center',
    },

    RightViewStyle: {
        flexDirection:'row',
        alignItems:'center',
    },

    LeftTitleStyle: {
        color:'gray',
        marginLeft:6,
        fontSize:16,
    },
    LeftImageStyle: {
        width:24,
        height:24,
        marginLeft:6,
        // 圆角
        borderRadius:12
    },
    // 右侧箭头'>' 样式
    RightArrowStyle: {
        width:8,
        height:16,
        marginRight:8,
    },
    RightTitleStyle: {
        color:'gray',
        marginRight:8,
        fontSize:16,
    },
    // 右侧图片样式
    RightImageStyle: {
       width:24,
       height:13,
       marginRight:6,

       // 圆角
       borderRadius:5,

    },
});

module.exports = MyCell;
