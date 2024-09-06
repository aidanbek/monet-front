<script setup lang="ts">
import { create } from '~/api/transaction'
import type { ICreateTransaction } from '~/types/Transaction'
import { TransactionTypes } from '~/data/Transaction'
import { useAccountStore } from '~/stores/accountStore'
import { storeToRefs } from 'pinia'
const { getAccounts } = useAccountStore()
const { accounts } = storeToRefs(useAccountStore())

const props = defineProps({
  visibility: {
    type: Boolean,
    required: true
  }
})

const accountOptions = computed(() => accounts.value.map(a => ({
  label: `${a.title} [${a.current_balance}]`,
  value: a.id
})))

const emit = defineEmits(['afterClose'])

const visible = ref(false)

watch(() => props.visibility, (v) => {
  visible.value = v

  if (v) {
    getAccounts()
  }
})

const formData = reactive<ICreateTransaction>({})
const formRef = ref()

const createTransaction = () => {
  create(formData)
}


</script>

<template>
  <a-modal
    v-model:open='visible'
    cancelText='Отменить'
    okText='Сохранить'
    title='Новый транзакция'
    @ok="createTransaction"
    @cancel="emit('afterClose')"
  >
    <a-form layout='vertical' ref='formRef' :model='formData'>
      <a-row :gutter="[16, 16]">
        <a-col span="24">
          <a-form-item
            name='account_id'
            label='Счет'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-select :options="accountOptions" v-model:value="formData.account_id" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 16]">
        <a-col span="12">
          <a-form-item
            name='type'
            label='Тип'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-select :options="TransactionTypes" v-model:value="formData.type" />
          </a-form-item>
        </a-col>
        <a-col span="12">
          <a-form-item
            name='amount'
            label='Сумма'
            :rules="[{ required: true, message: 'Заполните поле' }]"
          >
            <a-input-number v-model:value='formData.amount' :precision="2" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<style scoped lang="scss">

</style>