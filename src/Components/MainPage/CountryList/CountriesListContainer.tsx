import { connect } from 'react-redux';
import CountriesList from './CountriesList';
import { setCountries } from '../../../redux/countries-reducer';

const MapStateToProps = function (state: any) {
  return {
    countriesList: state.countryReducer.countries,
  };
};

const MapDispatchToProps = function (dispatch: any) {
  return {
    setCountries: (countriesList: any) => dispatch(setCountries(countriesList)),
  };
};

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountriesList);

export default CountryListContainer;
