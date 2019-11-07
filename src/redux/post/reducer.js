import PostsTypes from "./types";

const initialState = {
  isFetching: false,
  posts: [],
  errorMessage: undefined,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsTypes.FETCH_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };

    case PostsTypes.FETCH_POSTS_SUCCES:
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
      };

    case PostsTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
