import { VxeGlobalConfig } from 'vxe-pc-ui'

export interface ModuleOptions {
  /**
   * 是否全局注册所有组件（默认 true）
   * 设置为 false 时可配合 unplugin-vue-components 实现按需引入
   */
  global?: boolean

  /**
   * 全局配置选项，传递给 VxeUI.setConfig({})
   */
  globalConfig?: VxeGlobalConfig

  /**
   * 是否包含全部样式（默认 true）
   * 为 false 时用户需自行引入样式
   */
  includeStyles?: boolean

  /**
   * 需要按需引入的组件列表（仅在 global: false 时生效）
   */
  components?: string[]
}