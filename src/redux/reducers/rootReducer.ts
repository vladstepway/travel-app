import { combineReducers } from 'redux';
import countryReducer from './countriesReducer';
import langReducer from './langReducer';
import searchReducer from './searchReducer';
import countryPageReducer from './countryPageReducer';

const reducers = combineReducers({
  countryReducer,
  langReducer,
  searchReducer,
  countryPageReducer
});

export default reducers;
