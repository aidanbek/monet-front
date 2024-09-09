<script setup lang="ts">
import { getById } from '~/api/account'
import type { IAccount } from '~/types1/Account'

const account = ref<IAccount>()
const route = useRoute()
const title = ref<string>('')

onMounted(() => {
  getById(+route.params.id).then(r => {
    account.value = r
    title.value = account.value.title
  })
})

useHead({
  title: title,
  titleTemplate: 'Счета | %s'
})
</script>

<template>
  <a-card v-if="account">
    <p><b>Наименование:</b> {{ account.title }}</p>
    <p><b>Дата создания:</b> {{ account.created_at }}</p>
    <p><b>Дата обновления:</b> {{ account.updated_at }}</p>
  </a-card>
</template>

<style scoped lang="scss">

</style>