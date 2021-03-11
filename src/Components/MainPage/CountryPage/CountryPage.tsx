import React from 'react';
import Map from "./Map/Map";
import './CountryPage.module.css';

const CountryPage = function (props: any) {
    const { country } = props;
    console.log(props);
    const { mapCoords }  = country.details;
  return (
    <div>
      {country.name}
      <img src={country.photo} alt="" />
      <Map mapCoords={mapCoords}/>
    </div>
  );
};

export default CountryPage;
