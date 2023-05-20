import axios from "axios";
import {
  setError,
  setLoading,
  setNotifications,
  setNumOfNewNotifications,
} from "../slices/notification";
import { useSelector } from "react-redux";

export const getNotifications = () => async (dispatch, getState) => {
  dispatch(setLoading());

  const {
    user: { userInfo },
  } = getState((state) => state.user);

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/users/notifications`,
      config
    );
    const { notifications } = data;
    console.log(notifications);
    // loc ra nhung thong bao moi
    const numOfNewNotifications = notifications.filter(
      (notification) => !notification.seen
    ).length;

    dispatch(setNotifications(notifications));
    dispatch(setNumOfNewNotifications(numOfNewNotifications));
    console.log("lấy các thông báo");
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
export const seenNotification = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/api/notifications/seen`,
      { notiId: id },
      config
    );
    console.log("xem thông báo");
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
