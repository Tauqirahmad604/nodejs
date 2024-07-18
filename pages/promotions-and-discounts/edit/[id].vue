<template>
  <h1 class="font-rajdhani capitalize">Player Details</h1>
</template>

<script setup>
definePageMeta({
  title: 'edit promotions & discounts',
  id: 'promotions-and-discounts',
  parent: { label: 'general settings', id: 'general-settings' },
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'promotions and discounts', to: '/promotions-and-discounts' },
    { label: 'edit promocode' },
  ]
})
</script>
