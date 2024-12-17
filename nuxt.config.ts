// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-07',

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/eslint'],

  css: [
    '@/assets/styles/typography.css',
    '@/assets/styles/base.css'
  ],

  devtools: {
    enabled: true
  },

  i18n: {
    vueI18n: './config/i18n.config.ts'
  },

  build: {
    transpile: ['primevue']
  }

})