import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{
        flex:1,
        backgroundColor:'red',
        flexDirection: 'column',
        // flexDirection: 'row',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        alignItems: 'stretch',
        // alignItems: 'flex-start',
        // alignItems: 'flex-end',
        // alignItems: 'auto',
        }}>
        <View style={{width: 80, height: 150, backgroundColor: 'powderblue'}} />
        <View style={{height: 150, backgroundColor: 'skyblue'}} />
        <View style={{width: 80, height: 150, backgroundColor: 'steelblue'}} />
      </View>
      );
  }
}
