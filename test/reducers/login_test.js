import { loginReducer } from '../../src/app/reducers/login-reducer';
import * as ActionType from '../../src/app/constants/actionTypes';
import React from "react";
var assert = require('assert');
import { expect } from "chai";

describe("Reducer: login Reducer", () => {

    it('have user object in state', () => {
        // setup
        let action = {
            type: ActionType.AUTH_USER,
            payload: [{
                "user": {
                    "username": "",
                    "email": ""
                }
            }]
        };
        // execute
        let newState = loginReducer({ undefined }, action);
        // verify
        expect(newState).to.have.propery("user").to.be.a("object");
    });
});