import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import en from './locales/en/translation.json';
import nl from './locales/nl/translation.json';
import ru from './locales/ru/translation.json';
import ua from './locales/ua/translation.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {translation: en},
        nl: {translation: nl},
        ua: {translation: ua},
        ru: {translation: ru},
    },

    fallbackLng: 'en',
    detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
    },
    load: "languageOnly",
    lowerCaseLng: true, 
    interpolation: {
        escapeValue: false
    }
})

export default i18n;