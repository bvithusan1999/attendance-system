const LoginReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
    errorMsg: "",
    updateLoading: false,
  },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false, errorMsg: "" };
    case "AUTH_SUCCESS":
      localStorage.setItem("login", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
        errorMsg: "",
      };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.errorMsg,
      };
    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: false,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default LoginReducer;
