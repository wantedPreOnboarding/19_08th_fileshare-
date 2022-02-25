import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilesAPI } from "apis/models/fileList";
import { toObject } from "redux/utils/arrayToObject";
import { toAsyncType } from "redux/utils/asyncUtils";

const initialState = {
  fileList: toAsyncType.initial<toObject<FilesAPI>>(),
};

const fileListSlice = createSlice({
  name: "fileList",
  initialState,
  reducers: {
    loadFileList: (state) => {
      state.fileList = toAsyncType.loading();
    },
    successFileList: (state, action: PayloadAction<toObject<FilesAPI>>) => {
      state.fileList = toAsyncType.success<toObject<FilesAPI>>(action.payload);
    },
    errorFileList: (state) => {
      state.fileList = toAsyncType.error();
    },
    deleteFile: (state, action: PayloadAction<string>) => {
      if (state.fileList.data) {
        delete state.fileList.data[action.payload];
      }
    },
  },
});

export const { loadFileList, successFileList, errorFileList } =
  fileListSlice.actions;
export default fileListSlice.reducer;
