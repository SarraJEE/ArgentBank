import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/loginReducer";
import { userReducer } from "../reducers/userReducer";

/**
 * Configures store
 */
export const store = configureStore({
    reducer: {
      login: loginReducer,
      user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
  })
  