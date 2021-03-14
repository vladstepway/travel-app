import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface ILanguage {
  setLanguage: (lang: string) => void
}

const Language = ({lang,setLanguage}:any) => {
  return (
    <>
      <Select 
        labelInValue
        defaultValue={lang}
        style={{ width: 120 }}
        onChange={(e)=>{
         setLanguage(e.value);
          }}
      >
        <Option value="ru">Rus</Option>
        <Option value="en">Eng</Option>
        <Option value="by">Bel</Option>
      </Select>
    </>
  );
};

export default Language;
