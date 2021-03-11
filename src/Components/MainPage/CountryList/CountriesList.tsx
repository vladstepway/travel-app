import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './CountriesList.module.css';

const CountrieList = function ({ countriesList }: any ) {
  const list = countriesList.map((el: any) => (
    <li key={el.name}>
      <NavLink to={`/${el.name}`} id={el.name}>
        <img className={css.image} src={el.photo} />
        <span>{el.name}</span>
        <span> rating : {el.rating}</span>
      </NavLink>
    </li>
  ));
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default CountrieList;
