// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
  ],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
