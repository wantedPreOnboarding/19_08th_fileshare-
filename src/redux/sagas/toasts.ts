import { put, delay, takeEvery, select } from "redux-saga/effects";
import { addToast, deleteToast } from "redux/slices/toasts";

export function* toast() {
  const toastId: number = yield select(
    (state) => state.toasts[state.toasts.length - 1].id
  );
  yield delay(2000);
  yield put(deleteToast(toastId));
}

export default function* watchToast() {
  yield takeEvery(addToast, toast);
}
