import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon from '@ant-design/icons';
import PandaSvg from './Panda'
import LanguageContainer from './Language/LanguageContainer';
import SearchContainer from './Search/SearchContainer'
import 'antd/dist/antd.css';
import './Header.css'




const Header = function () {

  return (<>
    <Row className='header' wrap justify="center" style={{ background: 'linear-gradient(90deg, rgba(84,82,108,1) 0%, rgba(50,149,116,1) 36%, rgba(102,184,162,1) 73%, rgba(0,212,255,1) 100%);', display:'flex'}}>
     <Col flex={1} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><NavLink to='/'>
       <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><Icon component={PandaSvg} /> <span style={{paddingLeft: "1rem", fontSize: "1.5rem"}}>Travel App</span></div>
     </NavLink></Col>
      <Col className='ant-col-search' flex={1} style={{ display: 'flex', alignItems: 'center' }}><SearchContainer /></Col>
      <Col flex={1} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} ><LanguageContainer/></Col>
    </Row>
  </>)
}


export default Header;
