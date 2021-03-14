import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface ILanguage {
  lang:string;
  onLanguageChange: (lang: string) => void;
  setLanguage: (lang: string) => any;
}

const Language = ({lang,setLanguage,onLanguageChange}:ILanguage) => {
const [currentLang, setCurrentLang] = React.useState(lang)
React.useEffect(()=>{
    setCurrentLang(lang)
},[lang])
  return (
    <>
      <Select 
        labelInValue
        style={{ width: 120 }}
        onChange={(e:any)=>{
         setLanguage(e.value)
         onLanguageChange(e)
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
