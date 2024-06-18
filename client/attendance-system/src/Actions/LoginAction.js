import * as LoginApi from "../API/LoginRequest";
import { jwtDecode } from "jwt-decode";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });

  try {
    const { data } = await LoginApi.logIn(formData);
    // Assuming data contains the token
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL", errorMsg: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
