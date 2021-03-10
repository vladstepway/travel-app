import { combineReducers, createStore } from "redux";
import countryReducer from './countries-reducer'

const reducers = combineReducers({
countryReducer})
const store = createStore(reducers);

export default store;