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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

//屏幕宽度

var Dimensions = require('Dimensions');
var kWidth = Dimensions.get('window').width;
// 全局常量
const cols = 5
const cellW = Platform.OS == 'ios' ? 72 : 60;
const cellH = 70;
const vMargin = (kWidth - cellW * cols) / (cols + 1);

export default class TopListView extends Component {

    // 数据由外部参数决定
     static defaultProps = {

             dataArr:[],
     }
    // 构造
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

            dataSource: ds.cloneWithRows(this.props.dataArr)

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.contentViewStyle} //ListView内容样式
                    scrollEnabled={false}  //防止内容视图上下滚动
                />



            </View>
        );
    }

    //每一个cell所包含的内容。
    renderRow(rowData){
        return(

           <TouchableOpacity activeOpacity={0.8} onPress={()=>{alert('跳转到'+rowData.title+'界面')}}>
               <View style={styles.cellStyle}>
                   <Image source={{uri:rowData.image}} style={{width:52,height:52}}/>
                   <Text style={styles.titleStyle}>{rowData.title}</Text>
               </View>
           </TouchableOpacity>
        )


    }
}

const styles = StyleSheet.create({

    contentViewStyle: {
        flexDirection:'row',
        flexWrap:'wrap',
        width:kWidth,
        alignItems:'center',
        justifyContent:'center',
    },

    cellStyle: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        width:cellW,
        height:cellH,
        marginLeft:vMargin,
    },

    titleStyle: {
       color:'gray',
       fontSize:Platform.OS == 'ios' ? 14 : 12,
    },
});

module.exports = TopListView;

