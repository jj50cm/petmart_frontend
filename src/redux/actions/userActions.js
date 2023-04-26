import axios from "axios";
import { setError, setLoading, userLogin } from "../slices/user";
// import { API_URL } from "../../constants";

export const login = (email, password) => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.post(
         `${API_URL}/api/users/login`,
         { email, password },
         config
      );

      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
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
