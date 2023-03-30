// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
        { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' }
      ]
    }
  }
})
