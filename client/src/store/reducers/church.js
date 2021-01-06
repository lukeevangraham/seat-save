import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  maxGroupSize: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAX_GROUP_SIZE:
      return { ...state, maxGroupSize: action.payload[0].maxGroupSize };
    default:
      return state;
  }
};
