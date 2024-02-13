import { createSlice } from "@reduxjs/toolkit";

// Initial login state
const loginState = {
    token: localStorage.getItem("token"),
    isAuth: false,
    error: null,
    logoClick: null,
};

// Login slice
const loginAction = createSlice({
    name: "login",
    initialState: loginState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.body.token;
            state.isAuth = true;
            state.error = null;
        },
        loginFail: (state, action) => {
            state.token = null;
            state.isAuth = false;
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuth = false;
            state.error = null;
        },
        isToken: (state) => {
            state.isAuth = true;
        },
        logoClick: (state) => {
            state.logoClick = true;
        },
    },
});

export const { loginSuccess, loginFail, logoutSuccess, isToken, logoClick } = loginAction.actions;
export const loginReducer = loginAction.reducer;

