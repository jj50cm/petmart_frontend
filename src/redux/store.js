import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.js";
import post from "./slices/post.js";
import notification from "./slices/notification.js";

const reducer = combineReducers({
  user,
  post,
  notification,
});

export default configureStore({
  reducer,
});
