import React, { Component } from "react";
import {
  ListItem,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { setText, deleteText } from "../action";
import { TEXT_INPUT_HERE } from "../../constant";

export class Task_list extends Component {
  state = {
    text: ""
  };

  delText = index => {
    this.props.deleteText(index);
  };

  render() {
    const text_output = this.props.text.map((value, index) => (
      <View key={index}>
        <Text>
          {index}:{value}
        </Text>
        <Button title={"del"} onPress={() => this.delText(index)} />
      </View>
    ));
    return <ScrollView style={styles.scroll}>{text_output}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  scroll: {
    height: 300
  }
});

// storeが更新されると再描画
const mapStateToProps = state => ({
  name: state.user.name,
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
)(Task_list);
