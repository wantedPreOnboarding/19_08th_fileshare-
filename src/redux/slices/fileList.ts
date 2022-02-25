import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilesAPI } from "apis/models/fileList";
import { OptionsFlags } from "redux/utils/arrayToObject";
import { toAsyncType } from "redux/utils/asyncUtils";

const initialState = {
  fileList: toAsyncType.initial<OptionsFlags<FilesAPI>>(),
};

const fileListSlice = createSlice({
  name: "fileList",
  initialState,
  reducers: {
    loadFileList: (state) => {
      state.fileList = toAsyncType.loading();
    },
    successFileList: (state, action: PayloadAction<OptionsFlags<FilesAPI>>) => {
      state.fileList = toAsyncType.success<OptionsFlags<FilesAPI>>(
        action.payload
      );
    },
    errorFileList: (state) => {
      state.fileList = toAsyncType.error();
    },
  },
});

export const { loadFileList, successFileList, errorFileList } =
  fileListSlice.actions;
export default fileListSlice.reducer;
