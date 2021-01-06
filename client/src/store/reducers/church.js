import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  maxGroupSize: null,
  adminEmail: [],
  adminFirstName: "",
  adminLastName: "",
  signupMessage: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAX_GROUP_SIZE:
      return { ...state, maxGroupSize: action.payload[0].maxGroupSize };
    case actionTypes.FETCH_CHURCH_SETTINGS:
      return {
        ...state,
        adminEmail: action.payload.adminEmail,
        adminFirstName: action.payload.adminFirstName,
        adminLastName: action.payload.adminLastName,
        maxGroupSize: action.payload.maxGroupSize,
        signupMessage: action.payload.signupMessage
      };
    default:
      return state;
  }
};
