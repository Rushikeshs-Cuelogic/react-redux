
import * as actionTypes from "../constants/actionTypes.js";
import { browserHistory } from 'react-router';

export function registerUserReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.REGISTER_USER:
            browserHistory.push('login');
            return ({ ...state, registeredUser: action.registeredUser });
        default:
            return state;
    }
}