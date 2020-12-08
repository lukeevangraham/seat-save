import seats from "../../apis/seats"
import history from "../../history"

import * as actionTypes from "./actionTypes"

export const createEvent = (formValues) => async (dispatch) => {
    const response = await seats.post("/event", formValues)

    dispatch({
        type: actionTypes.CREATE_EVENT,
        payload: response.data
    })
}