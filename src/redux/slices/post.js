import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  postList: null,
  showPostList: null,
  singlePost: null,
  postsCount: 0,
  filterParams: "",
  isLike: false,
  isReview: false,
  reviews: [],
  createdPostList: null,
  favouritePostList: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setPostList: (state, { payload }) => {
      state.postList = payload;
      state.error = null;
      state.loading = false;
    },
    setPostsCount: (state, { payload }) => {
      state.postsCount = payload;
      state.error = null;
      state.loading = false;
    },

    setShowPostList: (state, { payload }) => {
      state.showPostList = payload;
      state.loading = false;
      state.error = null;
    },
    setSinglePost: (state, { payload }) => {
      state.singlePost = payload;
      state.error = null;
      state.loading = false;
    },
    setFilterParams: (state, { payload }) => {
      state.filterParams = payload;
      state.error = null;
      state.loading = false;
    },
    setIsLike: (state, { payload }) => {
      state.isLike = payload;
      state.error = null;
      state.loading = false;
    },
    setIsReview: (state, { payload }) => {
      state.isReview = payload;
      state.error = null;
      state.loading = false;
    },
    setReviews: (state, { payload }) => {
      state.reviews = payload;
      state.error = null;
      state.loading = false;
    },

    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    setCreatedPostList: (state, { payload }) => {
      state.createdPostList = payload;
      state.error = null;
      state.loading = false;
    },

    setFavouritePostList: (state, { payload }) => {
      state.favouritePostList = payload;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setError,
  setPostList,
  setSinglePost,
  setShowPostList,
  setPostsCount,
  setFilterParams,
  setIsLike,
  setReviews,
  setIsReview,
  setCreatedPostList,
  setFavouritePostList,
} = postSlice.actions;

export default postSlice.reducer;

export const userSelector = (state) => state.user;
