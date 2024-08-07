// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  app: {
    baseURL: '/Johnny-24.github.io/',
    buildAssetsDir: 'assets'
  },
  css: [
    "~/assets/styles/main.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    }
  }
})
