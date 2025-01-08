import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className="text-white bg-darkBlue px-2 py-1 rounded"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className="text-white bg-darkBlue px-2 py-1 rounded"
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
