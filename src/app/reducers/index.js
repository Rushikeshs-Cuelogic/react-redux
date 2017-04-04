import { combineReducers } from "redux";
import userReducer from "./reducer-users";
import { loginReducer } from "./login-reducer";
import { registerUserReducer } from "./registerUser-reducer";

const allreducers = combineReducers(
    {
        users: userReducer,
        user: loginReducer,
        registeredUser: registerUserReducer
    }
);
export default allreducers;