
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        reutrn (
            <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}