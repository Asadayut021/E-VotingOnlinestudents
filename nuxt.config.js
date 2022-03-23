import colors from 'vuetify/es5/util/colors'
const firebaseConfig = require('./firebase.json')

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - E-VotingOnlinestudents',
    title: 'E-VotingOnlinestudents',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Poppins:wght@200&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['boxicons/css/boxicons.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuesax.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/firebase',
  ],
  firebase: {
    // config: firebaseConfig,
    config: {
      apiKey: 'AIzaSyC71AYKQDicIgWYPWAbx1dCkshnHN00zc8',
      authDomain: 'e-votingonline.firebaseapp.com',
      projectId: 'e-votingonline',
      storageBucket: 'e-votingonline.appspot.com',
      messagingSenderId: '504249505379',
      appId: '1:504249505379:web:615542ae337ff0fe1c8a56',
      measurementId: 'G-95GKRR2ER8',
    },
    services: {
      storage: true,
      database: true,
      firestore: true,
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://e-votingonline.online',
    baseURL: 'http://localhost:5001'
  },
  endpoints: {
    login: 'loginstd',
    logout: 'loginstd',
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: {
            url: '/api/v1/auth_std/login_students',
            method: 'post',
            // propertyName: 'accessToken',
          },
          user: {
            url: '/api/v1/auth_std/me_students',
            method: 'get',
            // propertyName: 'data.item',
          },
          logout: false,
        },
      },
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
