import React from 'react';
import { Select } from 'antd';
import css from './Language.module.css'

const { Option } = Select;

interface ILanguage {
  lang:string;
  onLanguageChange: (lang: string) => void;
  setLanguage: (lang: string) => any;
}

const Language = ({lang,setLanguage,onLanguageChange}:ILanguage) => {
const [currentLang, setCurrentLang] = React.useState(lang);

React.useEffect(()=>{
    setCurrentLang(lang)
},[lang])
  return (
    <>
      <Select 
        size = 'small'
        labelInValue
        className = {css.selectBlock}
        onChange={(e:any)=>{
         setLanguage(e.value);
         onLanguageChange(e);

          }}
      >
        <Option className={css.optionBlock} value="ru">Rus</Option>
        <Option className={css.optionBlock} value="en">Eng</Option>
        <Option className={css.optionBlock} value="by">Bel</Option>
      </Select> 
    </>
  );
};

export default Language;
