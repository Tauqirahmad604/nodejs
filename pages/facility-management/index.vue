
<template>
  <!-- <UTabs :items="items" class="w-full">
    <template #all="{ item }">
      <FacilityCard/><FacilityCard/>
    </template>

<template #golf-lessons="{ item }">
      <FacilityCard/>
    </template>


<template #equestrian="{ item }">
      <FacilityCard/>
    </template>

</UTabs> -->
<div>
  <div class="flex justify-between items-center mb-7.5">
    <ul class="flex gap-4">
    <li class="px-6 py-3 bg-[#FAFAFC] rounded-[50px] border border-[#E5E7E9] text-no-show-900 text-sm capitalize cursor-pointer">
      ALL
    </li>
    <li class="px-6 py-3 bg-[#FAFAFC] rounded-[50px] border border-[#E5E7E9] text-no-show-900 text-sm capitalize">
      golf-lessons
    </li>
    <li class="px-6 py-3 bg-[#FAFAFC] rounded-[50px] border border-[#E5E7E9] text-no-show-900 text-sm capitalize">
      equestrian
    </li>
  </ul>
  <UButton color="green" size="md">+ Add</UButton>

  </div>

  <div>
    <FacilityCard />
    <FacilityCard />
    <FacilityCard />
  </div>

</div>

</template>


<!-- 
<template>
  <h1 class="font-rajdhani capitalize">Facility Management</h1>
</template> -->

<script setup>
  definePageMeta({
    parent: { label: 'general settings', id: 'general-settings' },
    id: 'facility-management',
    title: 'facility management',
    breadcrumb: [
      { label: 'home', to: '/' },
      { label: 'facility management' },
    ]
  })



const items = [{
  slot: 'all',
  label: 'All'
}, {
  slot: 'golf-lessons',
  label: 'Golf Lessons'
}, {
  slot: 'equestrian',
  label: 'Equestrian'
}]

const accountForm = reactive({ name: 'Benjamin', username: 'benjamincanac' })
const passwordForm = reactive({ currentPassword: '', newPassword: '' })

function onSubmitAccount() {
  console.log('Submitted form:', accountForm)
}

function onSubmitPassword() {
  console.log('Submitted form:', passwordForm)
}
</script>


