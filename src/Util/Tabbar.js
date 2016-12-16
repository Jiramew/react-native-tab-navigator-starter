import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
 
export default class TabBarItem extends Component {
    constructor(props){
        super(props);
    }

    render = () => {
        var itemTitle = (this.props.title != null) ? (<Text style={styles.title}>{this.props.title}</Text>) : null;
        var itemImage = (this.props.image != null) ? (<Image style={styles.image} source={this.props.image}/>) : null;

        return (
            <TouchableHighlight style={styles.tabNav}              
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <View style={styles.item}>
                    {itemImage}
                    {itemTitle}
                </View>
            </TouchableHighlight>
        );
    }
}
 
var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
      
    },
    tabNav:{
        flex:1,
        backgroundColor:"#fff"
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    image: {
        width: 20,
        height: 20,
        marginTop: 5,
        resizeMode: Image.resizeMode.stretch,
    },
    title: {
        fontSize: 12
    }
});
