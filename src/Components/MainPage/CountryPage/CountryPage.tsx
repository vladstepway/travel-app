import React, { useState } from 'react';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import './CountryPage.module.css';
import Weather from './Weather/Weather'
import Gallery from './Gallery/Gallery';

const CountryPage =  (props: any) => {
  const { lang, country, setSearchIsDisabled } = props;
  const { mapCoords, views } = country.details;
  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleClick() {
    !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
}

  React.useEffect(()=>{
    setSearchIsDisabled()
  },[props])
  return (
    <div>
      <img src={country.photo} alt="" />
      <div>
          <button type="button" onClick={handleClick}>[]</button>
          {isFullScreen
              ? <SmallScreenMap
                  countryCapital={country.capital}
                  countryName={country.name}
                  mapCoords={mapCoords}/>
              :  <FullScreenMap
                  countryCapital={country.capital}
                  countryName={country.name}
                  mapCoords={mapCoords}/>}

      </div>
      <Gallery views={views} />
      <Weather lang={lang} capital = {country.capital}/>

    </div>
  );
};

export default CountryPage;
