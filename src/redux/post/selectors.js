import { createSelector } from "reselect";

const selectPosts = (state) => {
  return state.posts;
};

export const selectIsPostFetching = createSelector(
  [selectPosts],
  (posts) => {
    return posts.isFetching;
  },
);

export const selectPostsItems = createSelector(
  [selectPosts],
  (posts) => {
    return posts.posts;
  },
);
