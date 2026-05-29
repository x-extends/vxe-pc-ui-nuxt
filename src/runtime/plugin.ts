import VxeUIBase from 'vxe-pc-ui'
import { ModuleOptions } from '../types'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const moduleOptions = config.public.vxeBaseSetting as ModuleOptions

  // 应用全局配置
  if (moduleOptions.globalConfig) {
    VxeUIBase.setConfig(moduleOptions.globalConfig)
  }

  nuxtApp.vueApp.use(VxeUIBase)
})
