import { createSlice } from "@reduxjs/toolkit";

// Initial post state
const userState = {
    // Define the initial state properties for your post entity
    // Example:
    title: null,
    content: null,
    author: null,
    id: null,
    error: null,
};

// Post slice
const userAction = createSlice({
    name: "post",
    initialState: userState,
    reducers: {
        userSuccess: (state, action) => {
            // Update state properties based on the action payload
            // Example:
            state.title = action.payload.body.title;
            state.content = action.payload.body.content;
            state.author = action.payload.body.author;
            state.id = action.payload.body.id;
            state.error = null;
        },
        userFail: (state, action) => {
            // Reset state properties and set error based on the action payload
            // Example:
            state.title = null;
            state.content = null;
            state.author = null;
            state.id = null;
            state.error = action.payload.message;
        },
        userLogout: (state) => {
            // Reset state properties on logout
            // Example:
            state.title = null;
            state.content = null;
            state.author = null;
            state.id = null;
            state.error = null;
        },
        usertUpdateSuccess: (state, action) => {
            // Update state properties for an update success
            // Example:
            state.title = action.payload.body.title;
            state.content = action.payload.body.content;
            state.author = action.payload.body.author;
            state.id = action.payload.body.id;
            state.error = null;
        },
        userUpdateFail: (state, action) => {
            // Update state properties for an update failure
            // Example:
            state.title = action.payload.body.title;
            state.content = action.payload.body.content;
            state.author = action.payload.body.author;
            state.id = action.payload.body.id;
            state.error = action.payload.message;
        },
    },
});

export const {
    userSuccess,
    userFail,
    userLogout,
    userUpdateSuccess,
    userUpdateFail,
} = userAction.actions;

export const userReducer = userAction.reducer;


