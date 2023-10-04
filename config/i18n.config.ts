import en from '~~/lang/en'
import it from '~~/lang/it'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'it',
  messages: { en, it }
}))
