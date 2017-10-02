/**
 * Created by MrHuang on 17/10/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

// 导入组件
var CellsSection = require('./HJCellsSectionView');

// 引入外部的json数据
var HomeJson5 = require('../../LocalData/XMG_Home_D5.json');

export default class HJShopCenter extends Component {

    static defaultProps = {
        // 2.往Home界面上传
        popToHomeView:null,
    }

    render() {
        return (
            <View style={styles.container}>
                {/*CellSection*/}
                <CellsSection
                    leftIcon = 'gw'
                    leftTitle = '购物中心'
                    rightTitle = {HomeJson5.tips}
                />
                {/*下面内容*/}
                <ScrollView style={styles.scrollviewStyles}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                >
                    {this.renderAllItems()}
                </ScrollView>
            </View>
        );
    }
    // 返回下半部分所有的Item
    renderAllItems(){

        var ItemArr = [];
        // 拿到数据
        var ItemsData = HomeJson5.data;
        for(var i = 0; i < ItemsData.length;i++){
            // 取出每一条数据
            var Itemdata = ItemsData[i];

            ItemArr.push(
                <ShopItems key={i}

                    shopImage={Itemdata.img}
                    shopSale={Itemdata.showtext.text}
                    shopName={Itemdata.name}
                    detailurl = {Itemdata.detailurl}
                     // 回调函数
                    popToShopCenter={(url)=>this.popToHome(url)}

                />
            )
        }
        return ItemArr;
    }

    // 往Home界面上传参数
    popToHome(url){
      if(this.props.popToHomeView == null) return;
        // 执行回调函数
       this.props.popToHomeView(url)
    }
}

// 每一个商场的类
class ShopItems extends React.Component {

    static defaultProps = {

        shopImage:'',
        shopSale:'',
        shopName:'',
        detailurl:'',
        //1.往购物中心界面上传
        popToShopCenter:null,

    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.clickItem(this.props.detailurl)}}>
                <View style={styles.ItmeStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyles}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem(url){
       if (this.props.detailurl == null ) return;
        // 执行回调
        this.props.popToShopCenter(url)
    }
}

const styles = StyleSheet.create({
    container: {

        marginTop:15,
    },
    scrollviewStyles: {

        flexDirection:'row',
        backgroundColor:'white',
        padding:10,

    },
    ItmeStyle:{
        marginRight:8,
        alignItems:'center'
    },
    imageStyles: {
        width:120,
        height:100,
        resizeMode:'contain',
        borderRadius:15,

    },
    shopSaleStyle: {

        backgroundColor:'orange',
        position:'absolute',
        left:0,
        bottom:30,
        color:'white',
        paddingLeft:8,

    },
    shopNameStyle: {

        textAlign:'center', //文字居中
        marginTop:3,
    },
});

module.exports = HJShopCenter;
