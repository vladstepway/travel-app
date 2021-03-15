import { connect } from 'react-redux';
import Search from './Search';
import { setSearch } from '../../../redux/actionCreators/exampleActionCreator';

const MapStateToProps = ({searchReducer:{text,disabled}}: any) => {

  return(
  {
    text,disabled
  }
  )
}

const MapDispatchToProps = (dispatch: any) => (
  {
    setInputText: (inputText: string) => dispatch(setSearch(inputText))
  }
  );

const SearchContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Search);

export default SearchContainer;
