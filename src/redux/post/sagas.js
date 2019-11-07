import { takeLatest, call, put, all } from "redux-saga/effects";

import * as services from "../../utils/services";
import { fetchPostsSuccess, fetchPostsFailure } from "./actions";
import PostsTypes from "./types";

export function* fetchPostsAsync() {
  try {
    const response = yield call(services.getPosts);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* fetchPostsStart() {
  yield takeLatest(PostsTypes.FETCH_POSTS_START, fetchPostsAsync);
}

export function* postsSagas() {
  yield all([call(fetchPostsStart)]);
}
