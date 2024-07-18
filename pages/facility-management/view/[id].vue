<template>
  <h1 class="font-rajdhani capitalize">View Facility</h1>
</template>

<script setup>
definePageMeta({
  parent: { label: 'general settings', id: 'general-settings' },
  id: 'facility-management',
  title: 'facility details',
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'facility management', to: '/facility-management' },
    { label: 'facility details' }
  ]
})
</script>
