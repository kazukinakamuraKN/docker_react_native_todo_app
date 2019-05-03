import React, { Component } from "react";
import {
  ListItem,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { setText, deleteText } from "../action";
import { TEXT_INPUT_HERE } from "../../constant";
import Task_list from "./task_list";

export class Input_and_button extends Component {
  state = {
    text: ""
  };

  handleInputText = text => {
    this.setState({
      text: text
    });
  };
  addText = () => {
    this.props.setText(this.state.text);
  };
  delText = index => {
    this.props.deleteText(index);
  };
  render() {
    return (
      <View>
        <View style={styles.input_container}>
          <TextInput
            onChangeText={this.handleInputText}
            style={styles.place_input}
            placeholder={TEXT_INPUT_HERE}
          />

          <Button
            onPress={this.addText}
            style={styles.place_button}
            title="ADD"
          />
          <Button
            onPress={this.delText}
            style={styles.place_button}
            title="DELETE"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.check_store}>
            namep: {this.props.name} textp: {this.props.text} names:{" "}
            {this.state.name} texts: {this.state.text}
          </Text>
        </TouchableOpacity>
        <Task_list />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  place_input: {
    width: "70%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  place_button: {
    width: "15%"
  },
  input_container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  check_store: {
    height: 100
  }
});

// storeが更新されると再描画
const mapStateToProps = state => ({
  name: state.user.name,
  name_array: state.user.name,
  text: state.list.text
});

// storeのactionが使える
const mapDispatchToProps = {
  setText,
  deleteText
};

// 描画しない更新はこれ
// const mergeProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input_and_button);
