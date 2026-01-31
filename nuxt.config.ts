const baseURL = '/uniteltelecom/'
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
  ],

  vite: {
    build: { sourcemap: false },
    css: { devSourcemap: false }
  },

  icon: {
    serverBundle: false
  },

  app: {
    baseURL,
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      htmlAttrs: { lang: 'pt-BR' }
    }
  },

  nitro: {
    preset: 'github-pages'
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode'
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
