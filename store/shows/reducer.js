import {
  FETCH_ALL_SHOWS_PENDING,
  ADD_NEW_SHOW_PENDING,
  REMOVE_SHOW_PENDING,
  FETCH_ONE_SHOW_PENDING,
  FETCH_ALL_SHOWS_FAILED,
  FETCH_ONE_SHOW_FAILED,
  ADD_NEW_SHOW_FAILED,
  REMOVE_SHOW_FAILED,
  FETCH_ALL_SHOWS_SUCCESS,
  ADD_NEW_SHOW_SUCCESS,
  REMOVE_SHOW_SUCCESS,
  EDIT_SHOW_SUCCESS,
  EDIT_SHOW_PENDING,
  EDIT_SHOW_FAILED,
  FETCH_ONE_SHOW_SUCCESS
} from "./constants";

const initialState = {
  all: [],
  one: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_SHOWS_PENDING:
    case ADD_NEW_SHOW_PENDING:
    case REMOVE_SHOW_PENDING:
    case FETCH_ONE_SHOW_PENDING:
    case EDIT_SHOW_PENDING:
      return state;

    case FETCH_ALL_SHOWS_FAILED:
    case FETCH_ONE_SHOW_FAILED:
    case ADD_NEW_SHOW_FAILED:
    case REMOVE_SHOW_FAILED:
    case EDIT_SHOW_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_SHOWS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ONE_SHOW_SUCCESS:
      return {
        ...state,
        one: action.payload
      };

    case ADD_NEW_SHOW_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case REMOVE_SHOW_SUCCESS:
      return {
        ...state,
        all: state.all.filter(show => show.id !== action.payload[0].id)
      };

    // case EDIT_SHOW_SUCCESS:
    //   return state.map(show =>
    //     show.id === action.payload[0].id ? action.payload : show
    //   );

    case EDIT_SHOW_SUCCESS:
      return {
        ...state,
        all: [action.payload[0], ...state.all]
      };

    // case EDIT_SHOW_SUCCESS:
    //   return {
    //     ...state,
    //     all: [
    //       ...state.all.filter(show => show.id !== action.payload[0].id),
    //       action.payload[0]
    //     ]
    //   };

    // case EDIT_SHOW_SUCCESS:
    //   return {
    //     ...state,
    //     all: state.all.map(show => {
    //       if (show.id === action.payload.id) {
    //         return action.payload;
    //       } else {
    //         return shows;
    //       }
    //     })
    //   };

    default:
      return state;
  }
};

// case EDIT_SHOW_SUCCESS:
//       return {
//         ...state,
//         id: action.payload
//       };
