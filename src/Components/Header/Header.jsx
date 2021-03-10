import React from 'react';
import { Row, Col } from 'antd';
import Search from './Search/Search'
import Language from './Language/Language'



const Header = function () {
  return (<>
    <Row>
      <Col span={8}> <span>Header</span></Col>
      <Col span={8}><Search /></Col>
      <Col span={8}><Language /></Col>
    </Row>
  </>)
}


export default Header;