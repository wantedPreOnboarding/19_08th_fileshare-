interface Async<T> {
  loading: boolean;
  data: T | null;
  error: T | null;
}

export const toAsyncType = {
  initial: <T>(initialData = null): Async<T> => ({
    loading: true,
    data: initialData,
    error: null,
  }),
  loading: <T>(prevState = null): Async<T> => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: <T>(payload: T): Async<T> => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: <T>(error: T): Async<T> => ({
    loading: false,
    data: null,
    error: error,
  }),
};
