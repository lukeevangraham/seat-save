import * as actionTypes from "../actions/actionTypes";

const initialState = {
  events: [],
  created: false
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS:
      return { ...state, events: action.payload, created: false };
    case actionTypes.CREATE_EVENT:
      return { ...state, events: action.payload, created: true }
    default:
      return state;
  }
};

export default eventReducer;
