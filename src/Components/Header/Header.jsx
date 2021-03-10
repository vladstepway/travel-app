import React from 'react';
import Search from './Search/Search'
import Language from './Language/Language'
import css from './Header.module.css'


const Header = function(){
  return(<div className={css.header}>
  <span>Header</span>
  <Search/>
  <Language/>
  </div>)
}


export default Header;