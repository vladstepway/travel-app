import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import { setSearchIsDisabled } from '../../redux/actionCreators/exampleActionCreator';
import { fetchCountries } from "../../redux/actions/stateAction";


const MapDispatchToProps = (dispatch: any) => {
  return {
    getCountries: () => dispatch(fetchCountries()),
    setSearchIsDisabled: () => dispatch(setSearchIsDisabled(false))
  };
};


const CountryListContainer = connect(
  null,
  MapDispatchToProps
)(MainPage);

export default CountryListContainer;