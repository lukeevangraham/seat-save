import * as actionTypes from "../actions/actionTypes";

const initialState = {
  created: false,
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_GROUP_START:
      return { ...state, created: false };
    case actionTypes.CREATE_GROUP:
      return { ...state, group: action.payload, created: true };
    case actionTypes.EDIT_GROUP:
      return { ...state, created: true };
    case actionTypes.DELETE_GROUP:
      return { ...state }
    default:
      return state;
  }
};

export default groupReducer;
