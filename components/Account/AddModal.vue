<script setup lang="ts">
import { create } from '~/api/account'
import type { ICreateAccount } from '~/types/Account'

const props = defineProps({
  visibility: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['afterClose'])

const visible = ref(false)

watch(() => props.visibility, (v) => {
  visible.value = v
})

const formData = reactive<ICreateAccount>({})
const formRef = ref()

const createAccount = () => {
  create(formData)
}
</script>

<template>
  <a-modal
    v-model:open='visible'
    cancelText='Отменить'
    okText='Сохранить'
    title='Новый счет'
    @ok="createAccount"
    @cancel="emit('afterClose')"
  >
    <a-form layout='vertical' ref='formRef' :model='formData'>
      <a-row>
        <a-col span="24">
          <a-form-item
            name='title'
            label='Название'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-input сlass='mr-2' v-model:value='formData.title' show-count :maxlength='255' />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col span="24">
          <a-form-item
            name='initial_balance'
            label='Начальный баланс'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-input-number сlass='mr-2' v-model:value='formData.initial_balance' />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<style scoped lang="scss">

</style>