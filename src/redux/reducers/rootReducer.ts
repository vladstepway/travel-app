import { combineReducers } from 'redux';
import countryReducer from './countriesReducer';
import langReducer from './langReducer';
import searchReducer from './searchReducer'

const reducers = combineReducers({
  countryReducer,
  langReducer,
  searchReducer,
});

export default reducers;
