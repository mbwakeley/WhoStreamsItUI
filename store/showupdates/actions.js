import axios from "axios";
import {
  FETCH_ALL_SHOWUPDATES_PENDING,
  BASE_URL,
  FETCH_ALL_SHOWUPDATES_SUCCESS,
  FETCH_ALL_SHOWUPDATES_FAILED,
  FETCH_ONE_SHOWUPDATE_FAILED,
  FETCH_ONE_SHOWUPDATE_PENDING,
  FETCH_ONE_SHOWUPDATE_SUCCESS,
  ADD_NEW_SHOWUPDATE_FAILED,
  ADD_NEW_SHOWUPDATE_PENDING,
  ADD_NEW_SHOWUPDATE_SUCCESS,
  REMOVE_SHOWUPDATE_PENDING,
  REMOVE_SHOWUPDATE_SUCCESS,
  REMOVE_SHOWUPDATE_FAILED
} from "./constants";

export const fetchAllShowUpdates = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_SHOWUPDATES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    // console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_SHOWUPDATES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_SHOWUPDATES_FAILED,
      payload: err
    });
  }
};

export const fetchOneShowUpdate = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_SHOWUPDATE_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_SHOWUPDATE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_SHOWUPDATE_FAILED,
      payload: err
    });
  }
};

export const addNewShowUpdate = newShowUpdate => async dispatch => {
  dispatch({
    type: ADD_NEW_SHOWUPDATE_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newShowUpdate);
    dispatch({
      type: ADD_NEW_SHOWUPDATE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_NEW_SHOWUPDATE_FAILED,
      payload: err
    });
  }
};

export const removeShowUpdate = id => async dispatch => {
  dispatch({
    type: REMOVE_SHOWUPDATE_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_SHOWUPDATE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_SHOWUPDATE_FAILED,
      payload: err
    });
  }
};
