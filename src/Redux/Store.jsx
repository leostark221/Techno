// src/store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Reducer";

// Reducers
const rootReducer = combineReducers({
  // Add your reducers here
  auth: authReducer, // assuming you have an authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
