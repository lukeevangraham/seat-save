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

export const deleteEvent = (id) => async (dispatch) => {
  const response = await seats.delete(`event/${id}`);

  dispatch({ type: actionTypes.DELETE_EVENT, payload: id });
};

export const editEvent = (id, formValues) => async (dispatch) => {
  const response = await seats.put(`event/${id}`, formValues)

  dispatch({ type: actionTypes.EDIT_EVENT, payload: response.data })
}

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

export const signIn = (profile) => async (dispatch) => {
  const response = await seats.post("/user", profile);

  if (response.data.email) {
    dispatch({
      type: actionTypes.SIGN_IN,
      payload: response.data,
    });
  } else {
    console.log("RES REAL: ", response.data.errorMessage);
    alert(response.data.errorMessage);
    dispatch({
      type: actionTypes.SIGN_OUT,
      payload: response.data,
    });
  }
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};
