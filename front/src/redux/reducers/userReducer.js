import { createSlice } from "@reduxjs/toolkit";

// Initial user state
const userState = {
    firstName: null,
    title: null,
    content: null,
    author: null,
    id: null,
    error: null,
};

// User slice
const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        userSuccess: (state, action) => {
            Object.assign(state, action.payload.body); // Mettre à jour les propriétés de l'utilisateur
            state.error = null;
        },
        userFail: (state, action) => {
            state.error = action.payload.message;
        },
        userLogout: (state) => {
            Object.keys(userState).forEach(key => {
                state[key] = userState[key]; // Réinitialiser toutes les propriétés de l'utilisateur
            });
        },
        userUpdateSuccess: (state, action) => {
            Object.assign(state, action.payload.body); // Mettre à jour les propriétés de l'utilisateur
            state.error = null;
        },
        userUpdateFail: (state, action) => {
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
} = userSlice.actions;

export const userReducer = userSlice.reducer;
