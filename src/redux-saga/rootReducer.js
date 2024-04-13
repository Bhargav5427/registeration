
import { combineReducers } from "redux";
import userReducer from "./User/reducer/Reducer"

let rootReducers = combineReducers({
    userReducer,
});

export default rootReducers;