import axios from "axios";
import {
  FETCH_ALL_SHOWS_PENDING,
  BASE_URL,
  FETCH_ALL_SHOWS_SUCCESS,
  FETCH_ALL_SHOWS_FAILED,
  FETCH_ONE_SHOW_FAILED,
  FETCH_ONE_SHOW_PENDING,
  FETCH_ONE_SHOW_SUCCESS,
  ADD_NEW_SHOW_FAILED,
  ADD_NEW_SHOW_PENDING,
  ADD_NEW_SHOW_SUCCESS,
  REMOVE_SHOW_PENDING,
  REMOVE_SHOW_SUCCESS,
  REMOVE_SHOW_FAILED,
  EDIT_SHOW_SUCCESS,
  EDIT_SHOW_PENDING,
  EDIT_SHOW_FAILED
} from "./constants";

export const fetchAllShows = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_SHOWS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    // console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_SHOWS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_SHOWS_FAILED,
      payload: err
    });
  }
};

export const fetchOneShow = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_SHOW_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_SHOW_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_SHOW_FAILED,
      payload: err
    });
  }
};

export const addNewShow = newShow => async dispatch => {
  dispatch({
    type: ADD_NEW_SHOW_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newShow);
    dispatch({
      type: ADD_NEW_SHOW_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_NEW_SHOW_FAILED,
      payload: err
    });
  }
};

export const removeShow = id => async dispatch => {
  dispatch({
    type: REMOVE_SHOW_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_SHOW_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_SHOW_FAILED,
      payload: err
    });
  }
};

export const editShow = (updatedShow, id) => async dispatch => {
  console.log("editShowId", id, updatedShow);
  dispatch({
    type: EDIT_SHOW_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedShow);
    dispatch({
      type: EDIT_SHOW_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: EDIT_SHOW_FAILED,
      payload: err
    });
  }
};
