/**
 * Created by MrHuang on 17/9/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    AlertIOS,
    Platform,
    Switch,
} from 'react-native';

export default class MoreCell extends Component {

    static defaultProps = {

        title:'',       //标题
        isSwitch:false,   //展示开关
        Righttitle:'',  //右侧标题
    }
    // 构造
    constructor(props) {
      super(props);
      this.state = {

          isOn:false,  //默认开关状态
      };
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>alert('cell被点击了!')}>
                <View style={styles.CellStyles}>
                   {/*左侧标题*/}
                   <Text>{this.props.title}</Text>
                   {/*右侧显示内容*/}
                    {this.renderRighTtContent()}
                </View>
             </TouchableOpacity>
        );
    }

    // 右侧显示图片或开关
    renderRighTtContent() {

            if(this.props.isSwitch) {
                return(
                    <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}}
                            onTintColor='rgba(255,96,0,1)'
                    />
                )
            }else {
                return(
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {this.renderRightTitle()}
                        <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightIconStyle}/>
                     </View>
                    )
            }


    }

    // 右侧标题
    renderRightTitle() {

        if (this.props.Righttitle.length > 0){
            return(
                <Text style={{color:'gray',marginRight:8}}>{this.props.Righttitle}</Text>
            )
        }

    }
}

const styles = StyleSheet.create({

    CellStyles: {

        height:Platform === 'ios' ? 40 : 30,
        backgroundColor:'white',
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5,

        //主轴对齐方式
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        paddingLeft:10,
        paddingRight:10,

    },

    rightIconStyle: {
        width:8,
        height:16,
    },

});

module.exports = MoreCell;