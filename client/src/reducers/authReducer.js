import { TEST_DISPATCH, LOGOUT_DISPATCH } from "../actions/types.js";

const initialState = {
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT_DISPATCH:
      return action.payload;
    default:
      return state;
  }
}
