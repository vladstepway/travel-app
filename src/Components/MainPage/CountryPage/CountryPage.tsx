import React from 'react';
import Map from './Map/Map';
import './CountryPage.module.css';
import Weather from './Weather/Weather'

const CountryPage =  (props: any) => {
  const { lang, country, setSearchIsDisabled } = props;
  const { mapCoords } = country.details;
  React.useEffect(()=>{
    setSearchIsDisabled()
  },[])
  return (
    <div>
      <img src={country.photo} alt="" />
      <Map countryName={country.name} mapCoords={mapCoords} />
      <Weather lang={lang} capital = {country.capital}/>
    </div>
  );
};

export default CountryPage;
