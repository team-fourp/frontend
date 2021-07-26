import metadata from './plugins/metadata/metadata'
import metadataDynamic from './plugins/metadata/metadata-dynamic'
import metadataStatic from './plugins/metadata/metadata-static'
import sitemaps from './plugins/utils/sitemaps'

export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiURL: process.env.BASE_API_URL
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: metadata.tags.title,
    titleTemplate: metadata.tags.titleTemplate,
    htmlAttrs: {
      lang: metadata.settings.locale,
    },
    meta: [...metadataStatic(), ...metadataDynamic()],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logos/favicon.ico' },
      // add montserrat font
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/css/variables.css',
    './static/css/utilities.css',
    './static/css/main.css'
  ],

  loading: {
    color: '#2AB4FC',
    height: '2px',
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/utils/helpers', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/commons',
      '~/components/special',
      '~/components/commons/input'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    // https://portal-vue.linusb.org/guide/getting-started.html
    'portal-vue/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_API_URL,
    credentials: true,
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: './static/logos/icon.png'
    },
    meta: {
      name: metadata.tags.title,
      theme_color: metadata.settings.color,
      lang: metadata.settings.lang,
      ogSiteName: metadata.og.siteName,
      ogImage: metadata.og.image.url,
      ogUrl: metadata.og.url
    },
    manifest: {
      lang: metadata.settings.lang,
      name: metadata.tags.title,
      description: 'FourP Web',
      short_name: metadata.tags.title,
      display: 'standalone',
      start_url: '/'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
      ]
    },
  },

  //  Sitemap module configuration
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: metadata.settings.disallow.split(','),
    sitemaps: sitemaps()
  },

  //  Nuxt lazy load configuration
  'nuxt-lazy-load': {
    directiveOnly: true,
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
  },


  // Html validator configuration
  htmlValidator: {
    usePrettier: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
        // 'element-required-attributes': ''
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  },

  // Color mode configuration
  colorMode: {
    preference: 'light',
    fallback: 'dark',
    classSuffix: ''
  }
}
