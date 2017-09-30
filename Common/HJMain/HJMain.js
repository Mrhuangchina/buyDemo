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
    Platform,  //判断当前的运行系统
} from 'react-native';

// ------导入外部组件------------
import TabNavigtor from 'react-native-tab-navigator';
import  {Navigator} from 'react-native-deprecated-custom-components';

var Home = require('../HJHome/HJHome');
var Me = require('../HJMe/HJMe');
var More = require('../HJMore/HJMore');
var Shop = require('../HJShop/HJShop');

export default class HJMain extends Component {

    // 构造
    constructor(props) {
      super(props);
      this.state = {

          selectedTab:'Home'
      };

    }

    render() {
        return (

           <TabNavigtor>

                   {/*首页 商店 我的 更多 TabBarItems*/}
               {this.renderTabBarNavigatorItems('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','Home','首页',Home)}
               {this.renderTabBarNavigatorItems('商店','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','Shop','商店',Shop,1)}
               {this.renderTabBarNavigatorItems('我的','icon_tabbar_mine','icon_tabbar_mine_selected','Me','我的',Me,)}
               {this.renderTabBarNavigatorItems('更多','icon_tabbar_misc','icon_tabbar_misc_selected','More','更多',More,5)}

               {/*    // 抽取封装  renderTabBarNavigatorItems
                   <TabNavigtor.Item
                       title='首页'
                       //默认图标
                       renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle} />}
                       // 被选中图标
                       renderSelectedIcon={()=> <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                       // 默认被选中状态
                       selected={this.state.selectedTab === 'Home'}
                       // 被点击切换
                       onPress={() => {this.setState({selectedTab:'Home'})}}
                       // 被选中时 字体颜色
                       selectedTitleStyle= {styles.titlesStyles}

                   >
                    <Navigator

                        initialRoute={{
                            name: '首页',
                            component:Home
                        }}

                        configureScene={() => {

                            return Navigator.SceneConfigs.PushFromRight;
                        }}

                        renderScene={(route, navigator) =>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}

                    />

                   </TabNavigtor.Item>

                   /!*商家*!/
               <TabNavigtor.Item
                   title='商家'
                   renderIcon = {() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                   renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
                   selected={this.state.selectedTab === 'Shop'}
                   onPress={() => {this.setState({selectedTab:'Shop'})}}
                   selectedTitleStyle= {styles.titlesStyles}
               >
                   <Shop/>

               </TabNavigtor.Item>

                   /!*我的*!/
               <TabNavigtor.Item
                   title='我的'
                   renderIcon = {() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                   renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
                   selected={this.state.selectedTab === 'Me'}
                   onPress={() => {this.setState({selectedTab:'Me'})}}
                   selectedTitleStyle= {styles.titlesStyles}
               >
                   <Me/>

               </TabNavigtor.Item>

                   /!*更多*!/
               <TabNavigtor.Item
                   title='更多'
                   renderIcon = {() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}/>}
                   renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_misc_selected'}}  style={styles.iconStyle}/>}
                   selected={this.state.selectedTab === 'More'}
                   onPress={() => {this.setState({selectedTab:'More'})}}
                   selectedTitleStyle= {styles.titlesStyles}


               >

                   <More/>

               </TabNavigtor.Item>
*/}
           </TabNavigtor>
        );
    }
    //封装TabBarItems和Navigator
    renderTabBarNavigatorItems(title,IconName, SelectedIconName,selectedTab,componentName,component,badgeText){

        return(
           <TabNavigtor.Item
               // TabBar名称
               title= {title}
               // 默认图标
               renderIcon = {() => <Image source={{uri:IconName}} style={styles.iconStyle}/>}
               // 被选中图标
               renderSelectedIcon = {() => <Image source={{uri:SelectedIconName}}  style={styles.iconStyle}/>}
               // 默认状态
               selected={this.state.selectedTab === selectedTab}
               // 点击被选中状态
               onPress={() => {this.setState({selectedTab:selectedTab})}}
               // 被选中字体颜色
               selectedTitleStyle= {styles.titlesStyles}
               // 角标
               badgeText = {badgeText}

            >
               {/*导航条跳转*/}
               <Navigator

                   initialRoute={{
                       name: componentName,  //名称
                       component:component   //跳转的界面
                   }}

                   configureScene={() => {

                       return Navigator.SceneConfigs.PushFromRight; //跳转方式
                   }}

                   renderScene={(route, navigator) =>{
                       let Component = route.component;
                       return <Component {...route.passProps} navigator={navigator} />
                   }}

               />

        </TabNavigtor.Item>

    )

    }
}

const styles = StyleSheet.create({

    iconStyle :{
        width: Platform.OS === 'ios' ? 30 :25, //如果当前系统是ios 是系统则width:30 是安卓则width:25
        height: Platform.OS === 'ios' ? 30 :25,
    },
    titlesStyles :{
        color:'rgba(212,97,0,1)',
    },
});

module.exports = HJMain;
