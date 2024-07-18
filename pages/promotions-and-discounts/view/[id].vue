<template>
  <h1 class="font-rajdhani capitalize">View Player</h1>
</template>

<script setup>
definePageMeta({
  parent: { label: 'general settings', id: 'general-settings' },
  title: 'promotions & discounts details',
  id: 'promotions-and-discounts',
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'promotions and discounts', to: '/promotions-and-discounts' },
    { label: 'promocode details' },
  ]
})
</script>
