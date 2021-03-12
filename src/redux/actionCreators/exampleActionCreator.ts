import {
  ADD,
  SET_COUNTRIES,
  SET_COUNTRY,
  SET_LANGUAGE,
} from '../actions/actionTypes';

export function add() {
  return {
    type: ADD,
  };
}

export const setCountries = function (countries: any[]) {
  return {
    type: SET_COUNTRIES,
    countries,
  };
};

export const setCountry = function (country: string) {
  return {
    type: SET_COUNTRY,
    country,
  };
};

export const setLanguage = (lang: string) => {
  return {
    type: SET_LANGUAGE,
    lang,
  };
};
