/**
 * Created by MrHuang on 17/10/2.
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
    WebView,
} from 'react-native';

export default class HJShopCenterDetail extends Component {

        constructor(props) {
          super(props);
          this.state = {
              //this.props.url 上一个界面传输下来的url。
              detailUrl:this.props.url+'?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

          };
        }

    render() {
        //拿到上级界面传输下来的url
        //alert(this.props.url);

        return (
            <View style={styles.container}>
                {/*导航栏*/}
                {this.renderNavBar()}
                {/*加载网页*/}
                <WebView
                automaticallyAdjustContentInsets={true}
                source={{'url':this.state.detailUrl}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                />

            </View>
        );
    }

    // 导航栏
    renderNavBar() {

        return(
            <View style={styles.NavBatstyle}>
                {/*返回按钮:this.props.navigator.pop() 返回上一级界面*/}
                <TouchableOpacity style={styles.settingPopStyle} onPress={()=>{this.props.navigator.pop()}}>
                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.ImagesIconStyle}/>
                </TouchableOpacity>

                <Text style={styles.TitleStyle}>购物中心详情</Text>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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
    settingPopStyle:{
        position:'absolute',
        left:10,
        bottom:15,
    },
    ImagesIconStyle: {

        width:Platform.OS === 'ios' ? 28 : 24,
        height:Platform.OS === 'ios' ? 28 : 24,
    },

});

module.exports = HJShopCenterDetail;
