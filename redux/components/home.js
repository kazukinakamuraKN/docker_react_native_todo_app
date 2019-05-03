import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { setName, deleteName } from "../action"; // action import & mapDispatchToProps => can use action
import store from "../store";

export class Home extends Component {
  state = {
    name: ""
  };

  handleTextChange = name => {
    this.setState({
      name: name
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Text style={{ marginTop: 100 }}>My name is {this.props.name}.</Text>
        <View style={{ flexDirection: "row" }}>
          <Button onPress={this.props.deleteName} title="deleteName" />
          <Button
            onPress={() => this.props.setName("カバヤ")}
            title="setName"
          />
          <TextInput onChangeText={this.handleTextChange} />
          <Button
            onPress={() => this.props.setName(this.state.name)}
            title="setInputName"
          />
        </View>
        {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
        {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
        <Text style={{ marginBottom: 100 }}>
          現在のstore: {JSON.stringify(store.getState())}
          {this.state.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。
  name: state.user.name
});

// importしたactionCreatorを記述。
const mapDispatchToProps = {
  setName,
  deleteName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
