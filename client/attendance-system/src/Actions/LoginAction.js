import * as LoginApi from "../API/LoginRequest";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await LoginApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};
