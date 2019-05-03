import React, { Component } from "react";
import { View } from "react-native";
import Home from "./redux/components/home";
import Input_and_button from "./redux/components/input_and_button";

export default class main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home />
        <Input_and_button />
      </View>
    );
  }
}
