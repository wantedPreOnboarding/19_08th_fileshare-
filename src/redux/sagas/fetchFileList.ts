import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "apis/requestAPIs/fileList";
import { successFileList, errorFileList } from "../slices/fileList";
import { FilesAPI } from "apis/models/fileList";
import { arrayToObject } from "redux/utils/arrayToObject";
import { loadFileList } from "../slices/fileList";

export function* fetchFileList() {
  try {
    // TODO: apis의 requestAPIs와 saga의 call에서 중복으로 타입을 지정하지 않도록 만들어보기.
    const data: FilesAPI[] = yield call(get.fileList);
    yield put(successFileList(arrayToObject(data, "key")));
  } catch (error) {
    yield put(errorFileList());
  }
}

export default function* watchFetch() {
  yield takeLatest(loadFileList, fetchFileList);
}
