import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartLine } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation(); 

  return (
    <nav className="bg-darkBlue h-screen text-textGray flex flex-col p-4 gap-6">
      <h1 className="text-white text-2xl font-bold">CryptoViews</h1>
      <LanguageSwitcher />
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-3 text-accentBlue">
          <FaChartLine size={20} /> {t('dashboard')}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
