[![github star](https://img.shields.io/github/stars/x-extends/vxe-pc-ui-nuxt.svg)](https://github.com/x-extends/vxe-pc-ui-nuxt/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-pc-ui-nuxt.svg?style=flat-square)](https://www.npmjs.com/package/vxe-pc-ui-nuxt)
[![NodeJS with Webpack](https://github.com/x-extends/vxe-pc-ui-nuxt/actions/workflows/webpack.yml/badge.svg)](https://github.com/x-extends/vxe-pc-ui-nuxt/actions/workflows/webpack.yml)
[![npm downloads](https://img.shields.io/npm/dt/vxe-pc-ui-nuxt.svg?style=flat-square)](https://npm-stat.com/charts.html?package=vxe-pc-ui-nuxt)
[![issues](https://img.shields.io/github/issues/x-extends/vxe-pc-ui-nuxt.svg)](https://github.com/x-extends/vxe-pc-ui-nuxt/issues)
[![issues closed](https://img.shields.io/github/issues-closed/x-extends/vxe-pc-ui-nuxt.svg)](https://github.com/x-extends/vxe-pc-ui-nuxt/issues?q=is%3Aissue+is%3Aclosed)
[![pull requests](https://img.shields.io/github/issues-pr/x-extends/vxe-pc-ui-nuxt.svg)](https://github.com/x-extends/vxe-pc-ui-nuxt/pulls)
[![pull requests closed](https://img.shields.io/github/issues-pr-closed/x-extends/vxe-pc-ui-nuxt.svg)](https://github.com/x-extends/vxe-pc-ui-nuxt/pulls?q=is%3Apr+is%3Aclosed)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# Vxe UI Nuxt

> [Vxe UI](https://vxeui.com) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.

## Installation

```bash
npm install vxe-pc-ui-nuxt -D
```

## Configuration

```ts
export default defineNuxtConfig({
  modules: [
    'vxe-pc-ui-nuxt'
  ],
  vxeBaseSetting: {
    // global: false // 是否按需加载
  }
})
```

## Usage

```vue
<template>
  <div>
    <vxe-form :data="formData" @submit="submitEvent">
      <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.role"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.age"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button type="submit" status="primary">提交</vxe-button>
          <vxe-button type="reset">重置</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script>
export default {
  data() {
    const formData: {
      name: '',
      nickname: '',
      sex: '',
      role: '',
      age: ''
    }
    return {
      formData
    }
  },
  methods: {
    submitEvent () {
      console.log('保存成功')
    }
  }
}
</script>
```

Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Development

- Run `npm run update i` to install the dependencies.
- Run `npm run run` to start playground in development mode.
- Run `npm run build` to build this project.
