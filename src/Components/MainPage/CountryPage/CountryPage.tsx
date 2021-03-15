import React, { useState } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import Currencies from './Currencies/Currencies';
import Weather from './Weather/Weather';
import Gallery from './Gallery/Gallery';
import DateAndTime from './Date/DateAndTime';
import './CountryPage.module.css';

const CountryPage =  (props: any) => {
  const { lang, country, setSearchIsDisabled } = props;
  const { mapCoords, views } = country.details;
  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleClick() {
    !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
}

  React.useEffect(()=>{
    setSearchIsDisabled();
  },[props]);
  return (
    <div>
      <img src={country.photo} alt="" />
        <div>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" onClick={handleClick} ><FullscreenOutlined /></button>
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
       <Currencies currency={country.currencyCode}/>
      <Gallery views={views} />
      <Weather lang={lang} capital = {country.capital}/>
      <DateAndTime country={country.name} city={country.capital}/>
    </div>
  );
};

export default CountryPage;
