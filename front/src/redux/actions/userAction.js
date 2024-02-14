import { createAction } from '@reduxjs/toolkit';

// Actions créées avec createAction
export const userSuccess = createAction('user/userSuccess');
export const userFail = createAction('user/userFail');
export const userLogout = createAction('user/userLogout');
export const userUpdateSuccess = createAction('user/userUpdateSuccess');
export const userUpdateFail = createAction('user/userUpdateFail');
export const  updateUserName = createAction('user/updateUserName');
