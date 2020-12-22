import seats from "../../apis/seats";

import * as actionTypes from "./actionTypes";

export const createEvent = (formValues) => async (dispatch) => {
  const response = await seats.post("/event", formValues);

  dispatch({
    type: actionTypes.CREATE_EVENT,
    payload: response.data,
  });
};

export const fetchUpcomingEvents = () => async (dispatch) => {
  const response = await seats.get("/event");

  dispatch({ type: actionTypes.FETCH_EVENTS, payload: response.data });
};

export const fetchEvent = (id) => async (dispatch) => {
  const response = await seats.get(`/event/${id}`);

  dispatch({ type: actionTypes.FETCH_EVENT, payload: response.data });
};

export const fetchPopulatedEvent = (id) => async (dispatch) => {
  const response = await seats.get(`event/admin/${id}`);

  dispatch({ type: actionTypes.FETCH_EVENTS, payload: response.data });
};

export const createGroup = (id, formValues) => async (dispatch) => {
  const response = await seats.post(`/group/${id}`, formValues);

  dispatch({
    type: actionTypes.CREATE_GROUP,
    payload: response.data,
  });
};

export const startCreateGroup = () => {
  return {
    type: actionTypes.CREATE_GROUP_START,
  };
};

export const signIn = (userId) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};
