import * as actionTypes from "../actions/actionTypes";

const initialState = {
  events: [],
  created: false,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS:
      return { ...state, events: action.payload, created: false };
    case actionTypes.FETCH_EVENT:
      if (state.events.length) {
        return {
          ...state,
          events: state.events.map((event) =>
            event._id === action.payload._id ? (event = action.payload) : event
          ),
        };
      } else {
        return { ...state, events: state.events.concat(action.payload) };
      }

    case actionTypes.CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        created: true,
      };
    case actionTypes.FETCH_POPULATED_EVENT:
      return { ...state, events: action.payload };
    case actionTypes.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event._id !== action.payload),
      };
    case actionTypes.EDIT_EVENT:
      return {
        ...state,
        created: true,
        events: state.events.filter((event) => event._id !== action.payload),
      };
    default:
      return state;
  }
};

export default eventReducer;
