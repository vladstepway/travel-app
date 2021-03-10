import { connect } from 'react-redux';
import CountriesList from './CountriesList'
import {setCountries} from '../../../redux/countries-reducer'

const MapStateToProps = function(state){
  return {
    countriesList: state.countryReducer.countries
  }
}

const MapDispatchToProps = function(dispatch){
  return{
  setCountries : (countriesList)=> dispatch(setCountries(countriesList))
}
}

const CountryListContainer = connect (MapStateToProps,MapDispatchToProps)(CountriesList);

export default CountryListContainer

