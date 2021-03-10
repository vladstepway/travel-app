import { initialState } from '../initialState';
import {ADD, SET_COUNTRIES, SET_COUNTRY} from '../actions/actionTypes'


export default function countryReducer(state = initialState, action:any){
    const stateCopy:any = {...state}
      switch (action.type) {
          case SET_COUNTRIES:
              stateCopy.countries = [...action.countries];
              return stateCopy;
              break;
          case SET_COUNTRY:
        stateCopy.currentCountry = action.country;
        return stateCopy;
              break;
        default:
        return state;
  }
  
  };
