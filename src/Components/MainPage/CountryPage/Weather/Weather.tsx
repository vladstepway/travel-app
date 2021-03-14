import React from 'react';

const getWeather = async (lang:string,capital:string) => {  
  console.log(lang)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=${lang}&appid=3bd5891ef3ce09779a39a0fa59195356&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
}

const Weather = (props:any) => {

React.useEffect( () => {
  getWeather(props.lang, props.capital)

},[props])

  return (
    <div>
    Weather
    </div>
  )
}


export default Weather