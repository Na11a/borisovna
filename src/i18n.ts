import i18n                 from 'i18next'
import { initReactI18next } from 'react-i18next'
import en                   from './locales/en/translation.json'
import uk                   from './locales/uk/translation.json'

i18n.use(initReactI18next).init({
  resources    : {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng          : localStorage.getItem('language') || 'uk',
  fallbackLng  : localStorage.getItem('language') || 'en',
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
})
export default i18n

