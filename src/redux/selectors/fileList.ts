import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

// TODO: fileList.fileList 이중 뎁스 구조 해소하기
const getData = (state: RootState) => state.fileList.fileList.data;

export const selectAllFiles = createSelector(getData, (state) =>
  Object.values(state || {}).map((value) => value)
);

export const fileSelectorById = (key: string) =>
  createSelector(getData, (state) => state?.[key]);
