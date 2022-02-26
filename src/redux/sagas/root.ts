import { all, call, fork } from "redux-saga/effects";
import watchFetch from "./fetchFileList";
import watchToast from "./toasts";

function* rootSaga() {
  yield all([fork(watchFetch), call(watchToast)]);
}

export default rootSaga;
