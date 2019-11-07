import PostsTypes from "./types";

export const fetchPostsStart = () => {
  return {
    type: PostsTypes.FETCH_POSTS_START,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: PostsTypes.FETCH_POSTS_SUCCES,
    payload: posts,
  };
};

export const fetchPostsFailure = (errorMessage) => {
  return {
    type: PostsTypes.FETCH_POSTS_FAILURE,
    payload: errorMessage,
  };
};
