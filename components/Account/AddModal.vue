<script setup lang="ts">
import { create } from '~/api/account'
import type { ICreateAccount } from '~/types1/Account'
import { AccountTypes } from '~/data/Account'
import { useBankStore } from '~/stores/bankStore'
import { storeToRefs } from 'pinia'

const { getBanks } = useBankStore()
const { banks } = storeToRefs(useBankStore())

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


onMounted(() => {
  getBanks()
})
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
      <a-row :gutter="[16, 16]">
        <a-col span="24">
          <a-form-item
            name='title'
            label='Название'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-input v-model:value='formData.title' show-count :maxlength='255' />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 16]">
        <a-col span="24">
          <a-form-item
            name='bank_id'
            label='Банк'
          >
            <a-select v-model:value="formData.bank_id">
              <a-select-option :value="null">Нет</a-select-option>
              <a-select-option v-for="bank of banks" :key="bank.id" :value="bank.id" :label="bank.name">
                <div class="flex items-center">
                  <img class="w-5 h-5" :src="bank.icon_url" :alt="bank.name" />&nbsp;
                  <span>{{ bank.name }}</span>
                </div>
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 16]">
        <a-col span="24">
          <a-form-item
            name='type'
            label='Тип'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-select :options="AccountTypes" v-model:value="formData.type" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 16]">
        <a-col span="24">
          <a-form-item
            name='initial_balance'
            label='Начальный баланс'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-input-number v-model:value='formData.initial_balance' :precision="2" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<style scoped lang="scss">

</style>