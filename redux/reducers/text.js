import { ADD_TEXT, DELETE_TEXT, DELETE_TEXT_INDEX } from "../../actionTypes";
INITIAL_STATE_TEXT = {
  text: ["No Text"]
};

const add_text = (old_text_array, new_text) => {
  return [...old_text_array, new_text]; //重複除外
};
const del_text = (old_text_array, del_index) => {
  return old_text_array.filter((value, index) => del_index !== index);
};

export default (text = (state = INITIAL_STATE_TEXT, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return { ...state, text: add_text(state.text, action.text) };
    case DELETE_TEXT:
      return { ...state, text: del_text(state.text, action.text) };
    default:
      return state;
  }
});
