import React from "react";
import * as actionTypes from "../constants/actionTypes";
import store from "../store";

export const userSigninRequest = (userData) => {
    // var storeState = store.getState();
    // if (storeState.registeredUser.registeredUser !== undefined) {
    //     if (storeState.registeredUser.registeredUser.username == userData.username && storeState.registeredUser.registeredUser.password == userData.password) {
    if ("abc" == userData.username && userData.password == "abc") {
        return {
            type: actionTypes.AUTH_USER,
            payload: {
                username: userData.username,
                email:"abc@cuelogic.com" //storeState.registeredUser.registeredUser.email
            }
        }
    }
    else {
        alert("Invalid UserId & Password");
    }
}

    // return {
    //     type: actionTypes.AUTH_USER,
    //     user: {
    //         username: userData.username,
    //         email: storeState.registeredUser.registeredUser.email
    //     }
    // }
