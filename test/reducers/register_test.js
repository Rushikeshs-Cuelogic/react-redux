import { registerUserReducer } from '../../src/app/reducers/registerUser-reducer';
import * as ActionType from '../../src/app/constants/actionTypes';
import React from "react";
var assert = require('assert');
import { expect } from "chai";

describe("Reducer: register user", () => {

    it('shuold have registered user object in state', () => {
        // setup
        let action = {
            type: ActionType.REGISTER_USER,
            registeredUser: {
                "username": "abc",
                "email": "abc@cuelogic.com",
                "password":"abc"
            }
        };
        // execute
        let newState = registerUserReducer({}, action);
        // verify
       
        expect(newState)=={ registeredUser: { username: 'abc', email: 'abc@cuelogic.com' , password:"abc"} };
    });
});