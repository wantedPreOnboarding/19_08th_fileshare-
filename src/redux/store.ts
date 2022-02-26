import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root";
import filesSliceReducer from "./slices/fileList";
import toastsSliceReducer from "./slices/toasts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    fileList: filesSliceReducer,
    toasts: toastsSliceReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

// RootState type
export type RootState = ReturnType<typeof store.getState>;
// App Dispatch type
export type AppDispatch = typeof store.dispatch;
