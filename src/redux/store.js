import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.js";

const reducer = combineReducers({
   user,
});

export default configureStore({
   reducer,
});
