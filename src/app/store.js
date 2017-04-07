import { createStore } from "redux";
import AllReducers from "./reducers";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
const store = createStore(
  AllReducers, {}, applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
export default store;


