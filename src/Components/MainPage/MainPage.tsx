import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountryListContainer from './CountryList/CountriesListContainer';
import CountryPageContainer from './CountryPage/CountryPageContainer';

const Page = ({getCountries,setSearchIsDisabled}:any) => {

	React.useEffect(() => {
		getCountries();
		setSearchIsDisabled();
	},[]);

  return (
    <div style={{ minHeight: '60vh' }}>
      <Switch>
        <Route exact path="/" render={() => <CountryListContainer />} />
        <Route
          path={`/${window.location.pathname.substring(1)}`}
          render={() => (
            <CountryPageContainer
              link={window.location.pathname.substring(1)}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Page;
