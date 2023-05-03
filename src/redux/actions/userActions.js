import axios from "axios";
import {
   setError,
   setLoading,
   userLogin,
   userLogout,
   userSignup,
} from "../slices/user";

export const login = (email, password) => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.post(
         `${import.meta.env.VITE_BASE_URL}/api/users/login`,
         { email, password },
         config
      );

      dispatch(userLogin(data));
      console.log("đăng nhập");
      localStorage.setItem("userInfo", JSON.stringify(data));
   } catch (error) {
      console.log("Lỗi khi đăng nhập");
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

export const signup = (newUser) => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.post(
         `${import.meta.env.VITE_BASE_URL}/api/users/register`,
         newUser,
         config
      );

      dispatch(userSignup(data));
      console.log("đăng ký");
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

export const logout = () => async (dispatch) => {
   localStorage.removeItem("userInfo");
   dispatch(userLogout());
};
