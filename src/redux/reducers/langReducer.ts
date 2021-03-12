import { initialStateType } from '../../Interfaces';
import { SET_LANGUAGE } from '../actions/actionTypes';
import { initialState } from '../initialState';

type LangActionType = {
  type: string;
  lang: string;
};

const langReducer = (state = initialState, action: LangActionType) => {
  const stateCopy: initialStateType = { ...state };
  switch (action.type) {
    case SET_LANGUAGE:
      stateCopy.lang = action.lang;
      return stateCopy;
    default:
      return state;
  }
};

export default langReducer;
