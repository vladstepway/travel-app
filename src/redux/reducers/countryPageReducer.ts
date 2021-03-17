import {
  SET_COUNTRIES,
  SET_COUNTRY,
  FETCH_DETAILS_SUCCESS,
  FETCH_STATE_FAILURE,
  FETCH_STATE_BEGIN
} from '../actions/actionTypes';
import { IInitialStateType } from '../../Interfaces';
import { initialState } from '../initialState';






const countryPageReducer = (state = initialState, action: any) => {
  const stateCopy: IInitialStateType = { ...state };
  switch (action.type) {
    // case FETCH_STATE_BEGIN:
    //   return {
    //     ...stateCopy,
    //     loading: true,
    //     error: null
    //   };
    case FETCH_DETAILS_SUCCESS:
      console.log(action.payload.details)
      return {
        ...stateCopy,
        loading: false
      };
    // case FETCH_STATE_FAILURE:
    //   return {
    //     ...stateCopy,
    //     loading: false,
    //     error: action.payload.error,
    //     countries: []
    //   };
      
    case SET_COUNTRY:
      return stateCopy;
    default:
      return stateCopy;
  }
};

export default countryPageReducer;