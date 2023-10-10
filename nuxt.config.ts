import { fileURLToPath } from 'url'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  css: [
    '~/assets/styles/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
    // define: {
    //   BASE_URL: JSON.stringify(process.env.NUXT_PUBLIC_BASE_URL),
    // },
  },
  // alias: {
  //   fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
  // },
  modules: ['@pinia/nuxt']
})
