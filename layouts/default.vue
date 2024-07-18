<script setup>
</script>

<template>
  <Body class="bg-[#FBFBFB]">
  <div class="flex h-screen overflow-hidden">
    <div class="flex-shrink-0">
      <DashboardAside />
    </div>
    <div class="flex-1 flex flex-col h-full min-h-0">
      <div class="flex-shrink-0">
        <DashboardToolbar />
      </div>
      <div class="flex-1 mx-5 my-2.5 h-full min-h-0">
        <div class="bg-white min-h-0 h-full p-7.5 shadow-lg rounded-xl overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
  </Body>
</template>



