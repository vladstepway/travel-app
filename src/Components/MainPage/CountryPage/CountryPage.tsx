import React from 'react';
import Map from './Map/Map';
import './CountryPage.module.css';
import Gallery from './Gallery/Gallery';

const CountryPage = function (props: any) {
  const { country } = props;
  const { mapCoords, views } = country.details;
  return (
    <div>
      <img src={country.photo} alt="" />
      <Map countryName={country.name} mapCoords={mapCoords} />
      <Gallery views={views} />
    </div>
  );
};

export default CountryPage;
