import { SET_COUNTRIES, SET_COUNTRY } from '../actions/actionTypes';
import { IInitialStateType } from '../../Interfaces';
import { initialState } from '../initialState';




const countryReducer = (state = initialState, action: any) => {
  const stateCopy: IInitialStateType = { ...state };
  switch (action.type) {
    case SET_COUNTRIES:
      stateCopy.countries = [...action.countries];
      return stateCopy;
    case SET_COUNTRY:
      return stateCopy;
    default:
      return state;
  }
};

export default countryReducer;
