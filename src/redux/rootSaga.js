import { all, call } from "redux-saga/effects";

import { postsSagas } from "./post/sagas";

export default function* rootSaga() {
  yield all([call(postsSagas)]);
}
