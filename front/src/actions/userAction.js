import { createAction } from '@reduxjs/toolkit';
import axios from "axios";
import { logoutSuccess, isToken } from "../actions/loginAction";
import { login } from '../actions/loginAction';
const BASE_URL = "http://localhost:3001/api/v1";

// Actions créées avec createAction
export const userSuccess = createAction('user/userSuccess');
export const userFail = createAction('user/userFail');
export const userLogout = createAction('user/userLogout');
export const userUpdateSuccess = createAction('post/postUpdateSuccess');
export const userUpdateFail = createAction('post/postUpdateFail');
/**
 * Get user profile
 * @param {String} token 
 */
export const userProfile = (value_token) => (dispatch) => {
    const token = localStorage.getItem("token") !== null ? localStorage.getItem("token").slice(1, localStorage.getItem("token").length - 1) : value_token;
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            dispatch(userSuccess(response.data));
            dispatch(isToken());
        })
        .catch((err) => {
            dispatch(userFail(err.response));
        });
};

/**
 * Update user profile
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} token 
 */

export const updateProfile = (userName, value_token) => (dispatch) => {
    const token= localStorage.getItem("token") !== null ? localStorage.getItem("token").slice(1,localStorage.getItem("token").length-1) : value_token;
    axios.put(BASE_URL + "/user/profile",
        { userName: userName },
        { headers: { "Authorization": `Bearer ${token}` } 
    })
    .then((res)=>{
        dispatch(userUpdateSuccess(res.data))
        console.log(res.data)
    })
    .catch((err)=>{
        dispatch(userUpdateFail(err.response))
    })
 }


/**
 * Logout function
 */
export const logout = () => (dispatch) => {
    sessionStorage.clear();
    localStorage.removeItem('token');
    dispatch(userLogout());
    dispatch(logoutSuccess());
};

const auth_service = { login, userProfile, logout };

export default auth_service;
