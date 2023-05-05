import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.js";
import post from "./slices/post.js";

const reducer = combineReducers({
   user,
   post,
});

export default configureStore({
   reducer,
});
