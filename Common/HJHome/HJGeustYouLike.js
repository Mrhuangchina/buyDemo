/**
 * Created by MrHuang on 17/10/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

// 导入组件
var CellsSection = require('./HJCellsSectionView');

// 导入外部的json数据
var youLikeData = require('../../LocalData/HomeGeustYouLike.json');

export default class HJGeustYouLike extends Component {

    static defaultProps = {

        api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

    }

    constructor(props) {
      super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
      this.state = {

          dataSource:ds
      };
    }

    render() {
        return (
            <View style={styles.container}>

               <CellsSection
                    leftIcon='cnxh'
                    leftTitle='猜你喜欢'
               />
                {/*ListView*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
    //每一行数据
    renderRow(rowData){
            <TouchableOpacity activeOpacity={0.5} onPress={()=>alert()}>
                <View style={styles.cellStyles}>
                    {/*左边*/}
                  <Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.imageStyles}/>
                    {/*右边*/}
                    <View>
                         <View>
                            <text>{rowData.title}</text>
                            <text>{rowData.topRightInfo}</text>
                         </View>
                         <text>{rowData.subTitle}</text>
                         <View>
                             <Text>{rowData.subMessage}</Text>
                             <Text>{rowData.bottomRightInfo}</Text>
                         </View>

                    </View>

                </View>
            </TouchableOpacity>
    }
    // 处理图像的尺寸
    dealWithImgUrl(url){
        if(url.search('w.h') == -1){ // 'w.h' Url中不含有`w.h`
            return url;
        } else {
            return url.replace('w.h','120.90');
        }

    }
    // 从网络请求数据
    componentDidMount() {
        this.loadDataFormNet();
    }

    // loadDataFromNet(){
    //       fetch(this.props.api_url)
    //           .then((response) => response.json())  //转换成Json数据格式
    //           .then((responseData) =>{
    //
    //               // 更新数据源
    //               this.setState({
    //                    dataSource:this.state.dataSource.cloneWithRows(responseData.data)
    //
    //               })
    //
    //           })
    //           //网络异常加载本地数据
    //           .catch((error) =>{
    //               this.setState({
    //                   dataSource:this.state.dataSource.cloneWithRows(youLikeData.data)
    //               })
    //           })
    // }
    loadDataFormNet(){
        fetch(this.props.api_url)
            .then((response) => response.json()) // 下一步
            .then((responseData) => {
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

        marginTop:15,
    },
    imageStyles:{
        width:120,
        height:90,
        resizeMode:'contain'
    }

});

module.exports = HJGeustYouLike;
