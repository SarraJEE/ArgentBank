import axios from "axios";
import { createAction } from '@reduxjs/toolkit';
// Action creators
export const loginSuccess = createAction('login/loginSuccess');
export const loginFail = createAction('login/loginFail');
export const logoutSuccess = createAction('login/logoutSuccess');
export const isToken = createAction('login/isToken');
export const logoClick = createAction('login/logoClick');

//partie Api
const BASE_URL = "http://localhost:3001/api/v1";

/**
 * Login function
 * @param { String } email 
 * @param { String } password 
 * @param { Boolean } rememberMe 
 * @returns { Object }
 */

// Inside your login function
export const login = (email, password, rememberMe) => (dispatch) => {
    axios.post(BASE_URL + "/user/login", { email, password })
        .then((response) => {
            const token = response.data.body.token;
            if (!rememberMe) {
                localStorage.setItem("token", JSON.stringify(token));
            } else {
                sessionStorage.setItem("token", JSON.stringify(token));
            }
            dispatch(loginSuccess(response.data));
            console.log(response)
            return response.data;

        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message));
        });
};


