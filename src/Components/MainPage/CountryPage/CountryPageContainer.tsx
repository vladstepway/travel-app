import { connect } from 'react-redux';
import CountryPage from './CountryPage';
import { setCountries, setSearchIsDisabled } from '../../../redux/actionCreators/exampleActionCreator';
import { ICountries } from '../../../Interfaces';



const MapStateToProps = (state: any, { link }: any) => {

  return {
    lang : state.langReducer.lang,
    country: state.countryReducer.countries.find(
      (el: any) =>
        el.name.toLowerCase() === link.toLowerCase()
    ),
  };
};

const MapDispatchToProps = (dispatch: any) => (
  {

    setCountries: (countriesList: ICountries[]) => dispatch(setCountries(countriesList)),
    setSearchIsDisabled: () => dispatch(setSearchIsDisabled(true))
  }
);

const CountryListContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(CountryPage);

export default CountryListContainer;
