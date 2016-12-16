import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import First from "./First.js";
import Second from "./Second.js";
import Third from "./Third.js";
import TabBarItem from "../Util/Tabbar.js";

var pages = [
    <First />,
    <Second />,
    <Third />,
]

export default class Navmain extends Component {
    constructor(props, params) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }

    render = () => {
        return (
            <Navigator
                initialRoute={{index:this.state.tabIndex}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
                navigationBar={this.TabBar()}
            />
        );
    }

    renderScene = (route, navigator) => {
       console.log('state:',this.state)
       return (
           pages[this.state.tabIndex]
       )
    }

    TabBar = () => {
        return (
            <View style={styles.tabs}>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("../Image/image.png") }
                    title="第一"
                    onPress={() => {
                        this.setState({tabIndex:0})
                    }}></TabBarItem>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("../Image/image.png") }
                    title="第二"
                    onPress={() => {
                        this.setState({tabIndex:1})
                    }}></TabBarItem>
                 <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("../Image/image.png") }
                    title="第三"
                    onPress={() => {
                        this.setState({tabIndex:2})
                    }}></TabBarItem>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:"row",
    }
});
