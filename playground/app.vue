<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  nickname: '',
  sex: '',
  role: '',
  age: ''
})

const submitEvent = () => {
  console.log('保存成功')
}
</script>

<template>
  <div>
    <vxe-form :data="formData" @submit="submitEvent">
      <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name" />
        </template>
      </vxe-form-item>
      <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.role" />
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.age" />
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button type="submit" status="primary">
            提交
          </vxe-button>
          <vxe-button type="reset">
            重置
          </vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  height: 300px;
}
.bg1 {
  background-color: #a6c9ed;
}
.bg2 {
  background-color: #c0dcf7;
}
.bg3 {
  background-color: #dfedfb;
}
.bg4 {
  background-color: #a6c9ed;
}
</style>
