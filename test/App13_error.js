import React, {Component} from 'react';
import {Button, Alert, Text, TextInput, View} from 'react-native';

export default class PizzaTranslator extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      // <Button style={{padding:60, height:60, backgroundColor:'blue'}} onPress={() => { Alert.alert("你点击了按钮！")} } title="点我!" />
      // <View style={{padding: 50, backgroundColor:}}>
      // <View style={{padding: 60}}>
      //   <TextInput
      //   style={{height:40}}
      //   placeholder="Type here to translate!"
      //   onChangeText={(text) => this.setState({text})}
      //   value={this.state.text}
      //    />
      //
      //    <Text style={{padding:10, fontSize: 42}}>
      //     {this.state.text.split(' ').map((word) => word && 'c').join(' ')}
      //    </Text>
      // </View>

      // <View>
      // <Button style={{padding:60, height:60, backgroundColor:'blue'}} onPress={() => { Alert.alert("你点击了按钮！")} } title="点我!" />
      // <View style={{flex:1, backgroundColor:'red'}}>
      // </View>
      //
      // <View style={{flex:1}}>
      // <Button
      //   // style={{flex:1, backgroundColor:'blue'}}
      //   onPress={() => {
      //     Alert.alert("你点击了按钮！");
      //     }
      //   }
      //   title="点我!" />
      // </View>

      <View>
      <View style={{flex:1, backgroundColor:'red'}}>
      </View>

      <View style={{flex:1}}>
      <Button
        // style={{flex:1, backgroundColor:'blue'}}
        onPress={() => {
          Alert.alert("你点击了按钮！");
          }
        }
        title="点我!" />
      </View>
      </View>
    );
  }
}
