import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../style/Header';

export default class Header extends Component{
    render(){
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Albums</Text>
            </View>
        );
    }
}