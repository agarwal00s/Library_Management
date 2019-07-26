import { TEST_DISPATCH, LOGOUT_DISPATCH } from "./types.js";
import axios from "axios";

export const registerUser = (userData, history) => {
  axios
    .post("students/register", userData)
    .then(res => history.push("/searchBook"))
    .catch(err => console.log(err));
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};

export const loginUser = (userData, history) => {
  axios
    .post("students/login", userData)
    .then(res => history.push("/searchBook"))
    .catch(err => console.log(err));
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};

export const logOutUser = history => {
  return { type: LOGOUT_DISPATCH, payload: null };
};
