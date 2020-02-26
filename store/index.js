import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import showsReducer from "./shows/reducer";
import usersReducer from "./users/reducer";
import showUpdatesReducer from "./showupdates/reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  shows: showsReducer,
  users: usersReducer,
  showUpdates: showUpdatesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
