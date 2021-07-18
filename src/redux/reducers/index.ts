import { combineReducers } from "redux";
import creatorReducer from "./creatorReducer";

const rootReducer = combineReducers({
  creator: creatorReducer,
});

export default rootReducer;
