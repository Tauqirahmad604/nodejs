<template>
  <h1 class="font-rajdhani capitalize">View Player</h1>
</template>

<script setup>
definePageMeta({
  parent: { label: 'general settings', id: 'general-settings', },
  id: 'players-memberships',
  title: 'player details',
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'players memberships', to: '/players-memberships' },
    { label: 'player details' }
  ]
})
</script>
