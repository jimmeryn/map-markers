import { combineReducers } from "redux";
import options from "./options";
import data from "./data";
import errors from "./errors";

const reducer = combineReducers({ options, data, errors });

export default reducer;
