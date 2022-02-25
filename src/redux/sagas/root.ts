import createSagaMiddleware from "redux-saga";
import { all, call } from "redux-saga/effects";
import fetchFileList from "./fetchFileList";

function* rootSaga() {
  yield all([call(fetchFileList)]);
}

export default rootSaga;
