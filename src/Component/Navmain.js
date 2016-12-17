import React from 'react';
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

var pages = [First, Second, Third]

export default class Navmain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected:0}
    }

    renderScene = (route, navigator) => {
        let ComponentRender = pages[route.index];
        return <ComponentRender {...route.params} />
    }

    navigate = (tab) => {
        console.log(this._navigator.getCurrentRoutes());
        if(this._navigator) {
            this._navigator.push({index: tab});
            this.setState({selected:tab});
        }
    }

    TabBar = () => {
        return (
            <View style={styles.tabs}>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={(this.state.selected == 0) ? require("../Image/star.png") : require("../Image/star_sel.png")}
                    title="First"
                    onPress={() => this.navigate(0)}></TabBarItem>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={(this.state.selected == 1) ? require("../Image/star.png") : require("../Image/star_sel.png")}
                    title="Second"
                    onPress={() => this.navigate(1)}></TabBarItem>
                 <TabBarItem
                    underlayColor="#B5B5B5"
                    image={(this.state.selected == 2) ? require("../Image/star.png") : require("../Image/star_sel.png")}
                    title="Third"
                    onPress={() => this.navigate(2)}></TabBarItem>
            </View>
        )
    }

    render = () => {
        return (
            <Navigator
                initialRoute={{index:0}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    console.log('config Scene:', route);
                    return (route.index > this.state.selected) ? Navigator.SceneConfigs.FloatFromRight : Navigator.SceneConfigs.FloatFromLeft;
                }}
                navigationBar={this.TabBar()}
                ref={(navigator) => {this._navigator = navigator}}
            />
        );
    }

    
}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:"row",
    }
});
