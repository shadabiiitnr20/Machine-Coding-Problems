import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './english.json';
import es from './spanish.json';

i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en', // Fallback language if the user's language is not available
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
