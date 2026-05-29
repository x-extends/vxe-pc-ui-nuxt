import { defineNuxtConfig } from 'nuxt/config'
import VxeUIBase from '../src/module'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-05',
  modules: [VxeUIBase],
  vxeBaseSetting: {
  }
})
