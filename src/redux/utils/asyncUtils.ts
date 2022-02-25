export const toAsyncType = {
  initial: <T>(initialData: T | null = null) => ({
    loading: true,
    data: initialData,
    error: false,
  }),
  loading: <T>(prevState: T | null = null) => ({
    loading: true,
    data: prevState,
    error: false,
  }),
  success: <T>(payload: T) => ({
    loading: false,
    data: payload,
    error: false,
  }),
  error: () => ({
    loading: false,
    data: null,
    error: true,
  }),
};
