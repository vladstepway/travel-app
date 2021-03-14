import { IInitialStateType } from '../../Interfaces';
import { SET_SEARCH, SET_SEARCH_IS_DISABLED } from '../actions/actionTypes';
import { initialState } from '../initialState';

type SearchActionType = {
  type: string;
  inputText: string;
  value: boolean;
};

const searchReducer = (state = initialState, action: SearchActionType) => {
  const stateCopy: IInitialStateType = { ...state };
  switch (action.type) {
    case SET_SEARCH:
      stateCopy.searchInput.text = action.inputText;
      return stateCopy;
    case SET_SEARCH_IS_DISABLED:
      stateCopy.searchInput.disabled = action.value;
      return stateCopy;
    default:
      return state;
  }
};

export default searchReducer;
