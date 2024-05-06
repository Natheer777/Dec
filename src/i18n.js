// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      searchPlaceholder: 'Type to search...',
      name: 'Name',
      email: 'Email',
      password: 'Password',
    },
  },
  ar: {
    translation: {
      searchPlaceholder: 'اكتب للبحث...',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
    },
  },
};

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
  });

export default i18n;
