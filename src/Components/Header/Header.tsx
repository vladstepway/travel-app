import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon from '@ant-design/icons';
import PandaSvg from './Panda';
import LanguageContainer from './Language/LanguageContainer';
import SearchContainer from './Search/SearchContainer';
import 'antd/dist/antd.css';
import './Header.css';

const Header = function () {

  return (<>
    <Row className='header' wrap justify="center" style={{ background: '#FFD97D', display: 'flex' }}>
      <Col flex={1} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><NavLink to='/'><Icon component={PandaSvg} /></NavLink></Col>
      <Col className='ant-col-search' flex={1} style={{ display: 'flex', alignItems: 'center' }}><SearchContainer /></Col>
      <Col flex={1} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} ><LanguageContainer /></Col>
    </Row>
  </>);
};


export default Header;