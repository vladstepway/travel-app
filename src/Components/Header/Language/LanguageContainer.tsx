import React from 'react';
import { connect } from 'react-redux';
import Language from './Language';
import { setLanguage } from '../../../redux/actionCreators/exampleActionCreator';

const MapStateToProps = (state:any) => {
  return({
    lang: state.langReducer.lang
    
  })
}

const MapDispatchToProps = (dispatch: any, props:any) => (
  {
    setLanguage: (value: any) => dispatch(setLanguage(value)),
    onLanguageChange: () => props.onLanguageChange()
  }
  );

const SearchContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Language);

export default SearchContainer;