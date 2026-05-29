<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/vxe-pc-ui-nuxt">
    <img src="https://img.shields.io/npm/v/vxe-pc-ui-nuxt.svg">
  </a>
  <a href="https://npmcharts.com/compare/vxe-pc-ui-nuxt?minimal=true">
    <img src="https://img.shields.io/npm/dm/vxe-pc-ui-nuxt.svg">
  </a>
</p>

# Vxe UI Nuxt

> [Vxe UI](https://vxeui.com) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.

## Installation

```bash
npm install vxe-pc-ui-nuxt -D
```

## Configuration

> [!WARNING]
> At present, the method cannot automatically obtain the context, and you need to manually configure [installMethods](#installmethods) in the options.

```ts
export default defineNuxtConfig({
  modules: [
    'vxe-pc-ui-nuxt'
  ],
  vxeBaseSetting: { /** Options */ }
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
