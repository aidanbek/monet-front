<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  }
})

const columns = [
  {
    title: 'Наименование',
    key: 'title',
    dataIndex: 'title',
  },
  {
    title: 'Тип',
    key: 'type_title',
    dataIndex: 'type_title',
  },
  {
    title: 'Текущий баланс',
    key: 'current_balance',
    dataIndex: 'current_balance',
  },
  {
    title: 'Дата создания',
    key: 'created_at',
    dataIndex: 'created_at',
  },
  {
    title: 'Дата обновления',
    key: 'updated_at',
    dataIndex: 'updated_at',
  }
];
</script>

<template>
  <a-table :columns="columns" :data-source="items" >
    <template #bodyCell='{ column, value, record }'>
      <template v-if="column.key === 'title'">
        <nuxt-link :to="`/accounts/${record.id}`">{{ value }}</nuxt-link>
      </template>
    </template>
  </a-table>
</template>

<style scoped lang="scss">

</style>