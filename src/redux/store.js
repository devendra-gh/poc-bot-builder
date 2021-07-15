import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools as compose } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
