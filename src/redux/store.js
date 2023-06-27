import { legacy_createStore } from "redux";

import CakeReducer from "./cake/CakeReducer";

const store = legacy_createStore(CakeReducer);

export default store;
