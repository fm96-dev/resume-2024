// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  css: ['@/assets/styles/typography.css'],

  build: {
    transpile: ['primevue']
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    vueI18n: './config/i18n.config.ts'
  }

})
