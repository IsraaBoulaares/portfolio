import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: { common: enCommon }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
