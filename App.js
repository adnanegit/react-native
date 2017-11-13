/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/component/Header';
import AlbumList from './src/component/AlbumList';

const appHeader = {
  headerText : 'Albums'
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style = {{flex: 1}}>
          <Header>{appHeader}</Header>        
          <AlbumList/>
      </View>
    );
  }
}

