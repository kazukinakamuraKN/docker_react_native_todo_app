import { combineReducers } from "redux";
import name from "./name";
import text from "./text";

export default combineReducers({ user: name, list: text });
