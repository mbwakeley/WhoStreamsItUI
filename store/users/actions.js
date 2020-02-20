import axios from "axios";
import {
  FETCH_ALL_USERS_PENDING,
  BASE_URL,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  FETCH_ONE_USER_FAILED,
  FETCH_ONE_USER_PENDING,
  FETCH_ONE_USER_SUCCESS,
  ADD_NEW_USER_FAILED,
  ADD_NEW_USER_PENDING,
  ADD_NEW_USER_SUCCESS,
  REMOVE_USER_PENDING,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILED
} from "./constants";

export const fetchAllUsers = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_USERS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    // console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_USERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_USERS_FAILED,
      payload: err
    });
  }
};

export const fetchOneUser = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_USER_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_USER_FAILED,
      payload: err
    });
  }
};

export const addNewUser = newUser => async dispatch => {
  dispatch({
    type: ADD_NEW_USER_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newUser);
    dispatch({
      type: ADD_NEW_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_NEW_USER_FAILED,
      payload: err
    });
  }
};

export const removeUser = id => async dispatch => {
  dispatch({
    type: REMOVE_USER_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_USER_FAILED,
      payload: err
    });
  }
};
