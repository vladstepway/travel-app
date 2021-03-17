import {
  SET_COUNTRY,
  FETCH_DETAILS_SUCCESS,
  FETCH_DELETE_DETAILS,
  FETCH_STATE_FAILURE,
  FETCH_STATE_BEGIN
} from '../actions/actionTypes';
import { IInitialStateType } from '../../Interfaces';


const initialState = {
  loading: true,
  error: null,
  data: {currencyCode: '',
  details: {
    info:'',
    views: [
      {
        imgURL: '',
        viewName: '',
        about: '',
      },
    ],
    videoURL: '',
    mapCoords: {
      center: {},
      capital: {},
    },
  },
  rating: 0
}
}



const countryPageReducer = (state = initialState, action: any) => {
  const stateCopy: any = { ...state };
  switch (action.type) {
    // case FETCH_STATE_BEGIN:
    //   return {
    //     ...stateCopy,
    //     loading: true,
    //     error: null
    //   };
    case FETCH_DETAILS_SUCCESS:
      return {...initialState, loading: false, data:{...action.payload.details},

      };


    case FETCH_DELETE_DETAILS:
      return{...initialState, loading:true}
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
      return state;
  }
};

export default countryPageReducer;