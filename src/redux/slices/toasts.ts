// 1. add toasts 안에 toast에 접근할 수 있는 값이 할당된다. fifo 방식
// 2. delete 일정 시간 후에 toasts.pop()으로 먼저 들어온 toast를 제거한다. (돔에서도 제거되어야 함)
// 3. add가 수행되면 setPosition으로 기존의 toast들을 위치 재조정한다.
// 4.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Toast {
  id: number;
  message: string;
  positionY: number;
}

const TOAST_HEIGHT = 50;

const initialState: Toast[] = [];

const setPosition = (toast: Toast, index: number) => ({
  ...toast,
  positionY: index * TOAST_HEIGHT,
});

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast["message"]>) => {
      const newState = [
        ...state,
        {
          id: state[state.length - 1]?.id + 1 || 1,
          message: action.payload,
          positionY: 0,
        },
      ].map(setPosition);

      return newState;
    },
    deleteToast: (state, action: PayloadAction<number>) => {
      return state
        .filter((toast) => toast.id !== action.payload)
        .map(setPosition);
    },
  },
});

export const { addToast, deleteToast } = toastsSlice.actions;

export default toastsSlice.reducer;
