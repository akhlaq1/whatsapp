/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './components/header'
import Body from './components/body'

export default class App extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <Body />
      </View>
    );
  }
}
