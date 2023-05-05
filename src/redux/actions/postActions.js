import axios from "axios";
import {
   setError,
   setLoading,
   setPostList,
   setSinglePost,
} from "../slices/post";

export const getAllPosts = () => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.get(
         `${import.meta.env.VITE_BASE_URL}/api/posts`,
         config
      );
      dispatch(setPostList(data));
      console.log("lấy ds posts");
   } catch (error) {
      console.log("Lỗi khi lấy bài đăng");
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

export const getPostById = (id) => async (dispatch) => {
   dispatch(setLoading(true));
   try {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const { data } = await axios.get(
         `${import.meta.env.VITE_BASE_URL}/api/posts/${id}`,
         config
      );
      dispatch(setSinglePost(data));
      console.log("lấy 1 bai dang");
   } catch (error) {
      console.log("Lỗi khi lấy 1 bài đăng");
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
