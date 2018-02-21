/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#2ba0c9'}}></View>
        <View style={{ flex: 1, backgroundColor: '#76b7bf'}}></View>
        <View style={{ flex: 1, backgroundColor: '#966e56'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    backgroundColor: '#284a58',
  }
});
