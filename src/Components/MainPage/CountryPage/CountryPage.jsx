import React from 'react'


const CountryPage = function({country}){
  return (
    <div>
    {country.name}
    <img src={country.photo} alt=""/>
    </div>

  )
}



export default CountryPage