import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const allFileSelector = (state: RootState) => state.fileList.fileList.data;

export const selectAllFiles = createSelector(allFileSelector, (state) =>
  Object.values(state || {}).map((value) => value)
);
