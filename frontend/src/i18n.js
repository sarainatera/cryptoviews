import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './i18n/locales/en/translation.json';
import esTranslation from './i18n/locales/es/translation.json';

console.log( enTranslation, esTranslation );

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: enTranslation, 
      },
      es: {
        translation: esTranslation, 
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
