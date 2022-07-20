import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles as galerieStyle } from "./Galerie";
import { createDrawerNavigator } from "@react-navigation/drawer";

export class First extends React.Component{
    render() {
        <View style={ styles.container }>
            <Text> First </Text>
        </View>
    }
}

export class Second extends React.Component{
    render() {
        <View style={ styles.container }>
            <Text> Second </Text>
        </View>
    }
}

const Drawer = createDrawerNavigator();

export class Other extends React.Component{
    render() {
        return (
            <Drawer.Navigator initialRouteName="Second">
                <Drawer.Screen name="First" component={ First } />
                <Drawer.Screen name="Second" component={ Second } />
            </Drawer.Navigator>
        )
    }
};

export const styles = StyleSheet.create( {
    ...galerieStyle
} );