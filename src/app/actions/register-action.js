import React from "react";
import * as actionTypes from "../constants/actionTypes";

export const userRegisterRequest = (userData) => {
    return {
        type: actionTypes.REGISTER_USER,
        registeredUser: {
            username: userData.username,
            email: userData.email,
            password: userData.password
        }

    }
}

