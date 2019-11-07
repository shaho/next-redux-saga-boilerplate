import { combineReducers } from "redux";

import postsReducer from "./post/reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
