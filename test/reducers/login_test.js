import { loginReducer } from '../../src/app/reducers/login-reducer';
import * as ActionType from '../../src/app/constants/actionTypes';
import React from "react";
var assert = require('assert');
import { expect } from "chai";

describe("Reducer: login Reducer", () => {

    it('shuold have user object in state', () => {
        // setup
        let action = {
            type: ActionType.AUTH_USER,
            user: {
                "username": "abc",
                "email": "abc"
            }
        };
        // execute
        let newState = loginReducer({}, action);
        // verify
        expect(newState).to.deep.equal({ user: { username: 'abc', email: 'abc' } });
    });
});