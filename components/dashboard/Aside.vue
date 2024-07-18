<script setup>
import { Collapse } from "vue-collapsed";

const links = ref(
  [
    { id: 'dashboard', label: 'dashboard', to: '/', icon: 'icon-jigsaw-dashboard' },
    {
      id: 'general-settings',
      label: 'general settings',
      icon: 'icon-jigsaw-keyboard-open',
      children: [
        { id: 'facility-management', label: 'facility management', to: '/facility-management', icon: 'icon-jigsaw-building' },
        { id: 'players-memberships', label: 'players memberships', to: '/players-memberships', icon: 'icon-jigsaw-receipt-item' },
        { id: 'promotions-and-discounts', label: 'promotions and discounts', to: '/promotions-and-discounts', icon: 'icon-jigsaw-receipt-item' },
      ]
    },
    {
      id: 'golf-lessons',
      label: 'golf lessons',
      icon: 'icon-jigsaw-receipt-item',
      children: [
        { id: 'lessons-and-activities', label: 'lessons / activities', to: '/lessons-and-activities', icon: 'icon-jigsaw-receipt-item' },
        { id: 'instructors-personnel', label: 'instructors personnel', to: '/instructors-personnel', icon: 'icon-jigsaw-user-square' },
        { id: 'time-sheet', label: 'time sheet', to: '/time-sheet', icon: 'icon-jigsaw-calendar' },
      ]
    },
  ]
)

const toggleCollapse = (id) => {
  const link = links.value?.find(item => item.id === id);
  if (link) {
    link.collapsed = !link.collapsed;
  }
}

</script>
<template>
  <div class="flex flex-col w-70 h-full min-h-0 ps-2.5 py-2.5">
    <div class="bg-cgreen-950 flex-shrink-0 h-20 p-5 rounded-2xl">
      <div class="flex items-center my-px">
        <div class="flex-1">
          <img src="/assets/images/jigsaw-logo.svg" alt="jigsaw tbook">
        </div>
        <div class="flex-shrink-0">
          <div class="flex items-center justify-center size-7 rounded-full bg-cgreen-900 cursor-pointer">
            <UIcon name="icon-jigsaw-angle-double-left" class="text-cgreen-hi size-6" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-cgreen-900 flex-1 min-h-0 h-full py-5 px-2.5 rounded-2xl">
      <div class="font-rajdhani flex flex-col gap-y-4">
        <template v-for="link in links" :key="link?.id">
          <div v-if="link?.children" class="flex flex-col">
            <div @click="toggleCollapse(link?.id)" class="text-white font-medium flex items-center gap-x-2.5 px-3 py-2 rounded-full cursor-pointer" :class="{ 'bg-cgreen-950': link?.id === `${$route?.meta?.parent?.id}` }">
              <div class="flex-shrink-0">
                <UIcon :name="link?.icon" class="size-6" />
              </div>
              <div class="flex-1">
                <span class="capitalize">{{ link?.label }}</span>
              </div>
              <div class="flex-shrink-0">
                <UIcon name="icon-jigsaw-angle-up" class="size-6 transition-transform	duration-300" :class="{'-rotate-180': link.collapsed}" />
              </div>
            </div>
            <Collapse :when="!link.collapsed">
              <ul class="ps-10.5 pt-2.5">
                <li v-for="child in link?.children" :key="child?.id">
                  <NuxtLink :to="child?.to" class="text-sm font-semibold flex items-center gap-x-3 py-2.5" :class="[ child?.id === `${$route?.meta?.id}` ? 'text-cgreen-hi' : 'text-white']">
<!--                    <UIcon :name="child?.icon" class="size-6" />-->
                    <span class="capitalize">{{ child?.label }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </Collapse>
          </div>
          <NuxtLink v-else :to="link?.to" class="text-white font-medium flex items-center gap-x-2.5 px-3 py-2.5 rounded-full" :class="{ 'bg-cgreen-950': link?.id === `${$route?.meta?.id}` }">
            <UIcon :name="link?.icon" class="size-6" />
            <span class="capitalize">{{ link?.label }}</span>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>


