/**
 * Created by MrHuang on 17/9/28.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    AlertIOS,
    ScrollView,

} from 'react-native';

var  HomeDetail = require('./HomeDetail');
var TopView = require('./TopView');

var HomeMiddleView = require('./HomeMiddleView');
var HomeMiddleBottomView = require('./HomeMiddleBottomView');

var ShopCenter = require('./HJShopCenter');
var ShopCenterDetail = require('./HJShopCenterDetail');

var GeustYouLike = require('./HJGeustYouLike');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class HJHome extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/*设置导航条*/}
                {this.renderNavBar()}
                {/*内容模块*/}
              <ScrollView>
                  {/*头部视图*/}
                  <TopView/>
                  {/*中间内容*/}
                  <HomeMiddleView />
                  {/*中间下半部分内容*/}
                  <HomeMiddleBottomView
                      popTopHome={(data)=>{this.PushDetail(data)}}
                  />
                  {/*购物中心*/}
                   <ShopCenter
                       popToHomeView = {(url)=>this.pushToShopCenterDetail(url)}
                   />
                  {/*猜你喜欢*/}
                  <GeustYouLike

                  />
              </ScrollView>
            </View>
        );
    }
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>{this.PushDetail()}} >
                    <Text style={styles.leftTitleStyle}>杭州</Text>
                </TouchableOpacity>
                <TextInput placeholder="输入商家,品类,商圈" style={styles.topInputStyle} />
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}} >
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}} >
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //跳转到详情页面
    PushDetail(data){
            alert(data)
        this.props.navigator.push({

            component:HomeDetail,   // 要跳转过去的组件
            title:'首页详细页'
        });

    }
    // 跳转到购物中心详情界面
    pushToShopCenterDetail(url){
        this.props.navigator.push({

            component:ShopCenterDetail,   // 要跳转过去的组件
            passProps:{'url':this.dealWithUrl(url)}         // 需要传递数据到下一个界面
        });
    }
    // 对url数据进行处理
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','')
    }
}

const styles = StyleSheet.create({

    // 导航栏
    navBarStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        // 主轴方向
        flexDirection:'row',
        // 侧轴对齐方式 垂直居中
        alignItems:'center',
        // 主轴对齐方式
        justifyContent:'space-around', // 平均分布
    },
    // 导航条左侧文字
    leftTitleStyle:{
        color:'white',
        marginTop:15,
        fontSize:20,
    },
    // 导航栏输入框
    topInputStyle:{
        width:width * 0.71,
        height:Platform.OS === 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop:Platform.OS === 'ios' ? 18 : 0,
        // 圆角
        borderRadius:18,
        paddingLeft:10,
    },
    // 导航条右侧视图
    rightNavViewStyle:{
        flexDirection:'row',
        height:64,
        // 侧轴对齐方式
        alignItems:'center',
        marginTop:15,

    },
    // 导航栏右侧图片
    navRightImgStyle:{
        width:Platform.OS === 'ios' ? 28 : 24,
        height:Platform.OS === 'ios' ? 28 : 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports  = HJHome;
