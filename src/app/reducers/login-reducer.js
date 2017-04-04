
import * as actionTypes from "../constants/actionTypes.js";
import { browserHistory } from 'react-router';

export function loginReducer(state = {}, action) {
    console.log("reducer", state)
    switch (action.type) {
        case actionTypes.AUTH_USER:
            browserHistory.push('profile')
             return ({ ...state, user: action.user });
        default:
            return state;
    }
}