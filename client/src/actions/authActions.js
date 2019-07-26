import { TEST_DISPATCH } from "./types.js";
import axios from "axios";
export const registerUser = (userData, history) => {
  axios
    .post("students/register", userData)
    .then(res => history.push("/"))
    .catch(err => console.log(err));
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
