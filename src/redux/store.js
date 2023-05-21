import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.js";
import post from "./slices/post.js";
import chat from "./slices/chat.js";
import notification from "./slices/notification.js";

const reducer = combineReducers({
  user,
  post,
  notification,
  chat,
});

export default configureStore({
  reducer,
});
