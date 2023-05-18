import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  notifications: null,
  numOfNewNotifications: 0,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotifications: (state, { payload }) => {
      state.notifications = payload;
      state.error = null;
      state.loading = false;
    },
    setNumOfNewNotifications: (state, { payload }) => {
      state.numOfNewNotifications = payload;
      state.error = null;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  setError,
  setLoading,
  setNotifications,
  setNumOfNewNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;

export const notificationSelector = (state) => state.notification;
