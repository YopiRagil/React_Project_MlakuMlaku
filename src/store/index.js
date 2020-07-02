import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import filterReducer from "./reducers/filterReducer";

import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  filter: filterReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;
