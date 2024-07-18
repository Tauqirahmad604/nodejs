<template>
  <h1 class="font-rajdhani capitalize">Add New Player</h1>
</template>

<script setup>
definePageMeta({
  parent: { label: 'general settings', id: 'general-settings', },
  id: 'players-memberships',
  title: 'add new player',
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'players memberships', to: '/players-memberships' },
    { label: 'add new player' }
  ]
})
</script>
