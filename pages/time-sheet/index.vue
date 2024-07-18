<template>
  <h1 class="font-rajdhani capitalize">time sheet</h1>
</template>

<script setup>
definePageMeta({
  title: 'time sheet',
  id: 'time-sheet',
  parent: { label: 'golf lessons', id: 'golf-lessons' },
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'time sheet' },
  ]
})
</script>
