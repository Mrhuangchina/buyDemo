/**
 * Created by MrHuang on 17/10/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';

export default class HJCellsSectionView extends Component {

    static defaultProps = {

        leftIcon:'',
        leftTitle:'',
        rightTitle:'',

    }

    render() {
        return (
            <View style={styles.container}>
               {/*左侧视图*/}
               <View style={styles.LeftViewStyles}>
                   <Image source={{uri:this.props.leftIcon}} style={styles.LeftIconStyle}/>
                   <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
               </View>
               {/*右侧视图*/}
                <View style={styles.RightViewStyles}>
                    <Text style={{fontSize:14, color:'gray'}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightIconStyle}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

        height:44,

        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },

    LeftViewStyles: {
        flexDirection:'row',
        alignItems:'center',
    },
    LeftIconStyle: {
        width:30,
        height:30,
        marginRight:5,
        marginLeft:8,
        resizeMode:'contain'
    },
    RightViewStyles: {
        flexDirection:'row',
        alignItems:'center',
    },

    rightIconStyle: {
        width:8,
        height:16,
        marginRight:5,
        marginLeft:8,
    },
});

module.exports = HJCellsSectionView;

