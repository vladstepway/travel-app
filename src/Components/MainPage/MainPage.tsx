import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountryListContainer from './CountryList/CountriesListContainer';
import CountryPageContainer from './CountryPage/CountryPageContainer';

const Page = function () {
  return (
    <div>
      <div>
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
    </div>
  );
};

export default Page;
