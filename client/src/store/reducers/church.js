import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  maxGroupSize: null,
  adminEmail: [],
  adminFirstName: "",
  adminLastName: "",
  signupMessage: "",
  churchName: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAX_GROUP_SIZE:
      console.log("fetching group size")
      return {
        ...state,
        maxGroupSize: action.payload[0].maxGroupSize,
        signupMessage: action.payload[0].signupMessage,
      };
      case actionTypes.FETCH_CHURCH_SETTINGS:
      console.log("fetching church name")
      return {
        ...state,
        adminEmail: action.payload.adminEmail,
        adminFirstName: action.payload.adminFirstName,
        adminLastName: action.payload.adminLastName,
        maxGroupSize: action.payload.maxGroupSize,
        signupMessage: action.payload.signupMessage,
        churchName: action.payload.churchName,
      };
    case actionTypes.CREATE_CHURCH:
      console.log("Payload: ", action.payload);
    default:
      return state;
  }
};
