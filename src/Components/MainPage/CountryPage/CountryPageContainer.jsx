import { connect } from 'react-redux';
import CountryPage from './CountryPage';
import {setCountries} from '../../../redux/countries-reducer'



const MapStateToProps = function(state, {link}){
  return {
    country: state.countryReducer.countries.find(el=>el.name.toLowerCase()===link.toLowerCase())
}
}

const MapDispatchToProps = function(dispatch){
  return{
  setCountries : (countriesList)=> dispatch(setCountries(countriesList)),
}
}

const CountryListContainer = connect (MapStateToProps,MapDispatchToProps)(CountryPage);

export default CountryListContainer

