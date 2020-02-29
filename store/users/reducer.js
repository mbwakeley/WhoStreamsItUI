import {
  FETCH_ALL_USERS_PENDING,
  ADD_NEW_USER_PENDING,
  REMOVE_USER_PENDING,
  FETCH_ONE_USER_PENDING,
  FETCH_ALL_USERS_FAILED,
  FETCH_ONE_USER_FAILED,
  ADD_NEW_USER_FAILED,
  REMOVE_USER_FAILED,
  FETCH_ALL_USERS_SUCCESS,
  ADD_NEW_USER_SUCCESS,
  REMOVE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  EDIT_USER_PENDING,
  EDIT_USER_FAILED,
  FETCH_ONE_USER_SUCCESS
} from "./constants";

const initialState = {
  all: [],
  one: {},
  err: {},
  loggedInUser: {
    id: 1,
    username: "Darvidicus",
    email: "Darvidicus@overwatch.com",
    password: "Junkrat123",
    rank: "admin"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_PENDING:
    case ADD_NEW_USER_PENDING:
    case REMOVE_USER_PENDING:
    case FETCH_ONE_USER_PENDING:
    case EDIT_USER_PENDING:
      return state;

    case FETCH_ALL_USERS_FAILED:
    case FETCH_ONE_USER_FAILED:
    case ADD_NEW_USER_FAILED:
    case REMOVE_USER_FAILED:
    case EDIT_USER_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ONE_USER_SUCCESS:
      return {
        ...state,
        one: action.payload
      };
    case ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id !== action.payload.id)
      };

    case EDIT_USER_SUCCESS:
      return {
        ...state,
        id: action.payload
      };

    default:
      return state;
  }
};
