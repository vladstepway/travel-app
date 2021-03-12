import React from 'react';
import { useTranslation } from 'react-i18next';

const CountryPage = function ({ country }: any) {
  const { t } = useTranslation();
  return (
    <div>
      {t(`countryName.${country.name}`)}
      <img src={country.photo} alt="" />
    </div>
  );
};

export default CountryPage;
