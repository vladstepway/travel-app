import React from 'react';
import { Input } from 'antd';
import { CompassOutlined } from '@ant-design/icons';

const Search = function(){
  return(<>
 <Input placeholder="набирай сцуко" prefix={<CompassOutlined />} />
  </>)
}


export default Search;