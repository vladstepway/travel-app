import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import { setSearchIsDisabled } from '../../redux/actionCreators/exampleActionCreator';
import { fetchCountries } from "../../redux/actions/stateAction";

const MapStateToProps = (state:any)=>{
  return state;
}

const MapDispatchToProps = (dispatch: any) => {
  return {
    getCountries: () => dispatch(fetchCountries()),
    setSearchIsDisabled: () => dispatch(setSearchIsDisabled(false))
  };
};


const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(MainPage);

export default CountryListContainer;