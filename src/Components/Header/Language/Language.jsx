import React from 'react';
import { Select } from 'antd';

const { Option } = Select;


const Language = function(){
  return(<>
  <Select
    labelInValue
    defaultValue={{ value: 'Ru' }}
    style={{ width: 120 }}
  >
    <Option value="Ru">Ru</Option>
    <Option value="Eng">Eng</Option>
    <Option value="Bel">Bel</Option>
  </Select>,
  </>)
}


export default Language;