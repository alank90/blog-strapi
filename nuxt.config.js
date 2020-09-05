export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/uikit.js', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337',
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/apollo', '@nuxtjs/markdownit'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://localhost:1337/graphql',
      },
    },
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
