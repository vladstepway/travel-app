import { connect } from 'react-redux';
import CountryPage from './CountryPage';
import {
  setCountries,
  setSearchIsDisabled,
} from '../../../redux/actionCreators/exampleActionCreator';
import { ICountries } from '../../../Interfaces';
import { fetchDetails } from '../../../redux/actions/stateAction';

const MapStateToProps = (state: any, { link }: any) => {
  return {
    lang : state.langReducer,
    
    country: state.countryReducer.countries.find(
      (el: any) => el.nameEN === link
    ),
  };
};

const MapDispatchToProps = (dispatch: any) => ({
  setCountries: (countriesList: ICountries[]) =>
    dispatch(setCountries(countriesList)),
  fetchDetails: (name:string) => dispatch(fetchDetails(name)),
  setSearchIsDisabled: () => dispatch(setSearchIsDisabled(true)),
});

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountryPage);

export default CountryListContainer;
