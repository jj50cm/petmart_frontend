import axios from "axios";
import {
  setChatList,
  setChatMessages,
  setError,
  setLoading,
} from "../slices/chat";

export const getChatData = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
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
    const body = {
      userData: {
        userId: "644253d1f1c989b08f76d47b",
      },
    };
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/chat`,
      config,
      body
    );
    dispatch(setChatList(data.threads));
    console.log("Lay ds chat");
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
export const getChatMessages = (id) => async (dispatch, getState) => {
  dispatch(setLoading(true));
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
    const body = {
      userData: {
        userId: "644253d1f1c989b08f76d47b",
      },
    };
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/chat/${id}`,
      config,
      body
    );
    dispatch(setChatMessages(data.thread.messages));
    console.log("Lay ds tin nhan");
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
