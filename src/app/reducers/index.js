import { combineReducers } from "redux";
import userReducer from "./reducer-users";

 const allreducers = combineReducers(
    {
        users: userReducer
    }
);
export default allreducers;