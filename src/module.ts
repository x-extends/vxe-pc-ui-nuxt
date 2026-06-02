import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { libraryName, configKey, allComponents } from './config'
import { ModuleOptions } from './types'

function kebabCase (str: string): string {
  return str
    // 1. 将驼峰（camelCase / PascalCase）拆分为单词
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // 2. 将下划线、空格、连续连字符等统一替换为连字符
    .replace(/[\s_]+/g, '-')
    // 3. 移除首尾连字符
    .replace(/^-+|-+$/g, '')
    // 4. 转换为小写
    .toLowerCase()
}

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
    } else {
      nuxt.hook('components:extend', (components) => {
        for (const compName of allComponents) {
          const dirName = kebabCase(compName)
          components.push({
            filePath: libraryName,
            export: compName,
            global: false,
            chunkName: dirName,
            pascalName: compName,
            kebabName: dirName,
            shortPath: libraryName,
            prefetch: false,
            preload: false
          })
        }
      })
    }
  }
})
