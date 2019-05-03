import { ADD_NAME, DELETE_NAME, ADD_TEXT, DELETE_TEXT } from "../actionTypes";
// actions.js
// actionはreduxの機能でなく、オブジェクトを作るための純粋なjsの関数です。
// 下のcloseKabayaの3行をchromeを開き、command + option + iでコンソールを開き貼り付けましょう。
// その後、console.log(deleteName())で、{type: "DELETE_NAME", name: ''}というオブジェクトが生成されるのを確かめましょう。
export const deleteName = () => ({
  type: DELETE_NAME,
  name: ""
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setName = name => ({
  type: ADD_NAME,
  name: name
});

export const deleteText = text => ({
  type: DELETE_TEXT,
  text: text
});

export const setText = text => ({
  type: ADD_TEXT,
  text: text
});
