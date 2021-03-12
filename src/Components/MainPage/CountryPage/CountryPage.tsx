import React from 'react';
import Map from './Map/Map';
import './CountryPage.module.css';

const CountryPage = function (props: any) {
  const { country } = props;
  const { mapCoords } = country.details;
  return (
    <div>
      <img src={country.photo} alt="" />
      <Map countryName={country.name} mapCoords={mapCoords} />
    </div>
  );
};

export default CountryPage;
