import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import showsReducer from "./shows/reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  shows: showsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
