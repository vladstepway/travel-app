import { IInitialStateType } from '../../Interfaces';
import { SET_LANGUAGE } from '../actions/actionTypes';

type LangActionType = {
  type: string;
  lang: string;
};

const lang = 'ru'


const langReducer = (state = lang, action: LangActionType) => {
  let stateCopy: string  = state;
  switch (action.type) {
    case SET_LANGUAGE:
      stateCopy = lang;
      return stateCopy;
    default:
      return state;
  }
};

export default langReducer;
