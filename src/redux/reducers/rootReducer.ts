import { combineReducers } from 'redux';
import countryReducer from '../countries-reducer';

const reducers = combineReducers({
  countryReducer,
});

export default reducers;
