import { useTranslation } from 'react-i18next'
import type { LocaleText } from '../types'

export function useLocaleText() {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('pt') ? 'pt' : 'en'

  return (text: LocaleText) => text[lang]
}
