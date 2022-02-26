import { all, fork } from "redux-saga/effects";
import watchFetch from "./fetchFileList";

function* rootSaga() {
  yield all([fork(watchFetch)]);
}

export default rootSaga;
