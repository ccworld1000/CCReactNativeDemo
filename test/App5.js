import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
  state = { isShowingText: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText
        });
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={{marginTop:50}}>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
      <Blink text='Yes blinking is so great' />
      <Blink text='Why did they ever take this out of HTML' />
      <Blink text='Look at me look at me look at me' />
      </View>
      );
  }
}
