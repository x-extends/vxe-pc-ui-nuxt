import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { libraryName, configKey } from './config'
import { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: `${libraryName}-nuxt`,
    configKey
  },
  setup (options, nuxt) {
    const opts = Object.assign({
      global: true,
      includeStyles: true
    }, options)

    const resolver = createResolver(import.meta.url)

    // 添加运行时插件
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'all'
    })

    // 将模块配置暴露给运行时使用
    nuxt.options.runtimeConfig.public[configKey] = opts

    if (opts.includeStyles) {
      nuxt.options.css = nuxt.options.css || []
      nuxt.options.css.push(`${libraryName}/lib/style.css`)
    }

    if (opts.global) {
      // 如果全局使用，组件将在 plugin 中统一注册
      // 这里无需额外操作
    } else if (opts.components && opts.components.length > 0) {
      // 按需引入模式：为每个组件添加自动导入
      for (const componentName of opts.components) {
        addComponent({
          name: componentName,
          export: componentName,
          filePath: libraryName
        })
      }
    }
  }
})
