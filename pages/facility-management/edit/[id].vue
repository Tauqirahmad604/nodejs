
<template>

      <DashboardHeaderPage>
        <template #title>
          <div>
            <h2 class="text-[#3E6A36] font-bold text-[18px]">General Information</h2>
          </div>
        </template>
        <template #input>
          <div>
            <UButton color="blue" size="sm">Update</UButton>
          </div>
        </template>
      </DashboardHeaderPage>
      

</template>

<script setup>
definePageMeta({
  parent: { label: 'general settings', id: 'general-settings' },
  id: 'facility-management',
  title: 'edit facility',
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'facility management', to: '/facility-management' },
    { label: 'edit facility' }
  ]
})


const items = [{
  label: 'General Information',
  defaultOpen: true,
  slot: 'general-info'
}]

</script>
