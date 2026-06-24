// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {

    mongoUser: process.env.MONGO_INITDB_ROOT_USERNAME,
    mongoPass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    mongoDbName: process.env.MONGO_DB_NAME,
    
  },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français' },
      { code: 'en', language: 'en-US', name: 'English' }
    ],
    defaultLocale: 'en', // Langue par défaut si le navigateur utilise une autre langue
    strategy: 'no_prefix', // Ou 'prefix_except_default' si tu veux des URLs du type /en/portfolio
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // Redirige automatiquement selon la langue du navigateur à l'arrivée
    }
  },

  ignore: [
    'pages/contact.vue' // to temporarily ignore the contact page until it's ready
  ]

})