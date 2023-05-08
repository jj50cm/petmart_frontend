import axios from "axios";
import {
  setError,
  setLoading,
  setPostList,
  setShowPostList,
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
    const { posts } = data;
    dispatch(setShowPostList(posts));
    dispatch(setPostList(posts));

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

export const sortShowPostList = (sortBy) => async (dispatch, getState) => {
  const { post } = getState();
  const { postList, showPostList } = post;
  if (!postList && !showPostList) return;

  const { prop, value } = sortBy;
  // giảm dần b[prop] - a[prop]
  // tăng dần a[prop] - b[prop]
  let sortedPosts = [];
  if (prop !== "createdDate") {
    if (value === "desc") {
      sortedPosts = [...postList].sort((a, b) => b[prop] - a[prop]);
    } else {
      sortedPosts = [...postList].sort((a, b) => a[prop] - b[prop]);
    }
  } else {
    if (value === "desc") {
      sortedPosts = [...postList].sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
    } else {
      sortedPosts = [...postList].sort(
        (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
      );
    }
  }
  //   console.log(sortedPosts);
  dispatch(setShowPostList(sortedPosts));
};

export const filterPosts = (filterParams) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/posts/?${filterParams}`,
      config
    );
    const { postsCount, posts } = data;
    dispatch(setShowPostList(posts));
    dispatch(setPostList(posts));
    console.log("lọc các posts");
  } catch (error) {
    console.log("Lỗi khi lọc posts");
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
