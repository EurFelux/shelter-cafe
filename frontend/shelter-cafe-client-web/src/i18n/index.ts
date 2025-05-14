import { createI18n } from 'vue-i18n'
import { usePreferredLanguages } from '@vueuse/core'

const preferedLanguages = usePreferredLanguages()
type SupportedLanguage = 'zh-CN' | 'en'
interface Locale {
  id: SupportedLanguage
  name: string
}
const SUPPORTED_LOCALES: Array<Locale> = [
  { id: 'zh-CN', name: '简体中文' },
  { id: 'en', name: 'English' },
]
const fallbackLocale = 'zh-CN'
let locale: string = ''

const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: fallbackLocale,
  messages: {},
})

// 加载首选语言
for (const lang of preferedLanguages.value) {
  locale = lang
  const supportedLang = SUPPORTED_LOCALES.find((item) => item.id === lang)
  if (supportedLang) {
    locale = supportedLang.id
    await loadLocaleMessages(supportedLang.id)
    setI18nLanguage(supportedLang.id)
    break
  }
}

// fallback时加载
if (locale === '') {
  await loadLocaleMessages(fallbackLocale)
  setI18nLanguage(locale as SupportedLanguage)
}

export default i18n

export { SUPPORTED_LOCALES }
export type { SupportedLanguage }

import { nextTick } from 'vue'

export function setI18nLanguage(localeId: SupportedLanguage) {
  i18n.global.locale.value = localeId
  loadLocaleMessages(localeId)
  document.querySelector('html')?.setAttribute('lang', localeId)
}

export async function loadLocaleMessages(localeId: SupportedLanguage) {
  if (i18n.global.availableLocales.includes(localeId)) {
    return
  }

  const messages = await import(`@/assets/locales/${localeId}.json`)
  i18n.global.setLocaleMessage(localeId, messages.default)

  return nextTick()
}
