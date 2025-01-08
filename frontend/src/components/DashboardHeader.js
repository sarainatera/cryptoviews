import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardHeader = () => {
  const { t } = useTranslation(); 

  return (
    <header className="bg-lightBlue p-4 rounded-lg flex justify-between items-center">
      <h2 className="text-white text-lg">{t('dashboard')}</h2>
    </header>
  );
};

export default DashboardHeader;
