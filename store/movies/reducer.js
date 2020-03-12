import {
  FETCH_ALL_MOVIES_PENDING,
  ADD_NEW_MOVIE_PENDING,
  REMOVE_MOVIE_PENDING,
  FETCH_ONE_MOVIE_PENDING,
  FETCH_ALL_MOVIES_FAILED,
  FETCH_ONE_MOVIE_FAILED,
  ADD_NEW_MOVIE_FAILED,
  REMOVE_MOVIE_FAILED,
  FETCH_ALL_MOVIES_SUCCESS,
  ADD_NEW_MOVIE_SUCCESS,
  REMOVE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_PENDING,
  EDIT_MOVIE_FAILED,
  FETCH_ONE_MOVIE_SUCCESS
} from "./constants";

const initialState = {
  all: [],
  one: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES_PENDING:
    case ADD_NEW_MOVIE_PENDING:
    case REMOVE_MOVIE_PENDING:
    case FETCH_ONE_MOVIE_PENDING:
    case EDIT_MOVIE_PENDING:
      return state;

    case FETCH_ALL_MOVIES_FAILED:
    case FETCH_ONE_MOVIE_FAILED:
    case ADD_NEW_MOVIE_FAILED:
    case REMOVE_MOVIE_FAILED:
    case EDIT_MOVIE_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ONE_MOVIE_SUCCESS:
      return {
        ...state,
        one: action.payload
      };

    case ADD_NEW_MOVIE_SUCCESS:
      return {
        ...state,
        all: [action.payload[0], ...state.all]
      };

    case REMOVE_MOVIE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(movie => movie.id !== action.payload[0].id)
      };

    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        all: [
          ...state.all.filter(movie => movie.id !== action.payload[0].id),
          action.payload[0]
        ]
      };

    default:
      return state;
  }
};
