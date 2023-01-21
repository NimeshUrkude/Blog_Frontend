import { dataReducer } from "./dataReducer";
import { combineReducers } from "redux";
const reducers = combineReducers({
  alldata: dataReducer,
});
export default reducers;