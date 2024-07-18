// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    "@nuxtjs/google-fonts"
  ],

  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr'},
      {code: 'ar', iso: 'ar-EG', file: 'ar.json', dir: 'rtl'},
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    // strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      fallbackLocale: 'en',
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
    },
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      "DM+Sans": [300, 400, 500, 600, 700],
      "Rajdhani": [300, 400, 500, 600, 700],
    }
  },

  devtools: {enabled: true},
  compatibilityDate: '2024-07-09',
});