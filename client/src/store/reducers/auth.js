import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  isSignedIn: true,
  userId: {
    adminOf: []
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case actionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: INITIAL_STATE.userId };
    default:
      return state;
  }
};
