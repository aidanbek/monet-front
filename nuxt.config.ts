import { defineNuxtConfig } from 'nuxt/config'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  ssr: false,
  sourcemap: false,

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],

  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({ importStyle: false })
        ],
      }),
    ],
    ssr: {
      noExternal: ['compute-scroll-into-view', 'ant-design-vue'],
    },
  },

  runtimeConfig: {
    public: {

    },
  },

  compatibilityDate: '2024-08-31',
})