import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import pt from '../locales/pt.json'

const STORAGE_KEY = 'portfolio-lang'

function detectLanguage(): 'pt' | 'en' {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'pt' || saved === 'en') return saved
  const browser = navigator.language?.toLowerCase() ?? 'en'
  return browser.startsWith('pt') ? 'pt' : 'en'
}

const initialLng = detectLanguage()
document.documentElement.lang = initialLng

void i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export function setAppLanguage(lng: 'pt' | 'en') {
  void i18n.changeLanguage(lng)
  localStorage.setItem(STORAGE_KEY, lng)
  document.documentElement.lang = lng
}

export default i18n
