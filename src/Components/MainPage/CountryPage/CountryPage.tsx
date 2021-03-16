import React, { useState } from 'react';
import { FullscreenOutlined } from '@ant-design/icons';
import {Typography} from 'antd';
import css from './CountryPage.module.css';
import SmallScreenMap from './Map/SmallMap/SmallScreenMap';
import FullScreenMap from './Map/BigMap/FullScreenMap';
import Currencies from './Currencies/Currencies';
import Weather from './Weather/Weather';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';
import DateAndTime from './Date/DateAndTime';

const { Text } = Typography;
const CountryPage = (props: any) => {
  const { lang, country, setSearchIsDisabled } = props;
  const { mapCoords, views,info,videoURL } = country.details;
  const [isFullScreen, setIsFullScreen] = useState(true);

  function handleClick() {
    !isFullScreen ? setIsFullScreen(true) : setIsFullScreen(false);
  }
  React.useEffect(() => {
    setSearchIsDisabled();
  },[props]);
  return (<div className = {css.wrapper}>
    <div className = {css.upperContent} >
        <div className={css.leftBlock} > 
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
                  <DateAndTime country={country.name} city={country.capital} />
        </div>

<div className={css.gallery}><Gallery views={views} /></div>
        <div  className={css.rightBlock}>
        <Weather lang={lang} capital = {country.capital}/>
        <Currencies currency={country.currencyCode}/>
       </div>
</div>
<div className={css.bottomBlock}><div className={css.video}><Video url={videoURL} /></div><div className={css.info}><Text>{info}</Text></div></div>
</div>
  );
};




export default CountryPage;
