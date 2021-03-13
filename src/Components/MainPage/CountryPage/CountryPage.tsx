import React from 'react';
import Map from './Map/Map';
import './CountryPage.module.css';

const CountryPage =  (props: any) => {
  const { country, setSearchIsDisabled } = props;
  const { mapCoords } = country.details;
  React.useEffect(()=>{
    setSearchIsDisabled()
  },[])
  return (
    <div>
      <img src={country.photo} alt="" />
      <Map countryName={country.name} mapCoords={mapCoords} />
    </div>
  );
};

export default CountryPage;
