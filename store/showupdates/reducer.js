import {
  FETCH_ALL_SHOWUPDATES_PENDING,
  ADD_NEW_SHOWUPDATE_PENDING,
  REMOVE_SHOWUPDATE_PENDING,
  FETCH_ONE_SHOWUPDATE_PENDING,
  FETCH_ALL_SHOWUPDATES_FAILED,
  FETCH_ONE_SHOWUPDATE_FAILED,
  ADD_NEW_SHOWUPDATE_FAILED,
  REMOVE_SHOWUPDATE_FAILED,
  FETCH_ALL_SHOWUPDATES_SUCCESS,
  ADD_NEW_SHOWUPDATE_SUCCESS,
  REMOVE_SHOWUPDATE_SUCCESS,
  FETCH_ONE_SHOWUPDATE_SUCCESS
} from "./constants";

const initialState = {
  all: [],
  one: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SHOWUPDATES_PENDING:
    case ADD_NEW_SHOWUPDATE_PENDING:
    case REMOVE_SHOWUPDATE_PENDING:
    case FETCH_ONE_SHOWUPDATE_PENDING:
      return state;

    case FETCH_ALL_SHOWUPDATES_FAILED:
    case FETCH_ONE_SHOWUPDATE_FAILED:
    case ADD_NEW_SHOWUPDATE_FAILED:
    case REMOVE_SHOWUPDATE_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_SHOWUPDATES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ONE_SHOWUPDATE_SUCCESS:
      return {
        ...state,
        one: action.payload
      };
    case ADD_NEW_SHOWUPDATE_SUCCESS:
      return {
        ...state,
        all: [action.payload[0], ...state.all]
      };

    case REMOVE_SHOWUPDATE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(
          showUpdate => showUpdate.id !== action.payload[0].id
        )
      };

    default:
      return state;
  }
};
