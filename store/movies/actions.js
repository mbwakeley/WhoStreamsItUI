import axios from "axios";
import {
  FETCH_ALL_MOVIES_PENDING,
  BASE_URL,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_ALL_MOVIES_FAILED,
  FETCH_ONE_MOVIE_FAILED,
  FETCH_ONE_MOVIE_PENDING,
  FETCH_ONE_MOVIE_SUCCESS,
  ADD_NEW_MOVIE_FAILED,
  ADD_NEW_MOVIE_PENDING,
  ADD_NEW_MOVIE_SUCCESS,
  REMOVE_MOVIE_PENDING,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_FAILED,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_PENDING,
  EDIT_MOVIE_FAILED
} from "./constants";

export const fetchAllMovies = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_MOVIES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    // console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_MOVIES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_MOVIES_FAILED,
      payload: err
    });
  }
};

export const fetchOneMovie = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_MOVIE_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_MOVIE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_MOVIE_FAILED,
      payload: err
    });
  }
};

export const addNewMovie = newMovie => async dispatch => {
  console.log("addNewMovie actions", newMovie);
  dispatch({
    type: ADD_NEW_MOVIE_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newMovie);
    dispatch({
      type: ADD_NEW_MOVIE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_NEW_MOVIE_FAILED,
      payload: err
    });
  }
};

export const removeMovie = id => async dispatch => {
  dispatch({
    type: REMOVE_MOVIE_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_MOVIE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_MOVIE_FAILED,
      payload: err
    });
  }
};

export const editMovie = (updatedMovie, id) => async dispatch => {
  console.log("editMovieId", id, updatedMovie);
  dispatch({
    type: EDIT_MOVIE_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedMovie);
    dispatch({
      type: EDIT_MOVIE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: EDIT_MOVIE_FAILED,
      payload: err
    });
  }
};
