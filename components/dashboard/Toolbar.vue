<template>
  <div class="flex flex-col justify-center h-22.5 pt-2.5 px-5">
    <div class="flex items-center justify-between">
      <div class="flex-1 flex flex-col">
        <UBreadcrumb
          :links="$route?.meta?.breadcrumb"
          divider="-"
          :ui="{
            li: 'flex items-center gap-x-1.5 text-[#AC2785] dark:text-gray-400 text-sm leading-6 min-w-0',
            active: 'text-[#AC2785] dark:text-primary-400',
            inactive:
              ' hover:text-[#AC2785] opacity-40 dark:hover:text-gray-200 hover:opacity-100',
          }"
        />
        <h1 class="text-gray-900 text-4xl font-rajdhani font-bold block capitalize">
          {{ $route?.meta?.title }}
        </h1>
      </div>
      <div class="bg-white flex-shrink-0 flex items-center p-2.5 rounded-full">
        <div class="w-90 me-7.5">
          <UInput
            placeholder="Search..."
            icon="icon-jigsaw-search"
            color="gray"
            variant="none"
            inputClass="bg-[#F4F7FE]"
            :ui="{
              rounded: 'rounded-full',
              placeholder: 'placeholder-[#8F9BBA] dark:placeholder-gray-500',
              size: {
                md: 'text-sm',
              },
              icon: {
                base: 'flex-shrink-0 text-[#2B3674] dark:text-gray-500',
                trailing: {
                  pointer: '',
                },
              },
            }"
          >
            <template #trailing>
              <UIcon name="icon-jigsaw-filter" class="text-[#2B3674] size-6" />
            </template>
          </UInput>
        </div>
        <div class="flex items-center gap-x-3">
          <div class="cursor-pointer">
            <UIcon name="icon-jigsaw-notification" class="text-[#2C3B84] size-6" />
          </div>
          <div class="cursor-pointer">
            <UIcon name="icon-jigsaw-settings" class="text-[#2C3B84] size-6" />
          </div>
          <div class="size-6">
            <img src="/assets/images/ar.svg" alt="" class="size-full" />
          </div>
          <div class="size-10">
            <img src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="" class="size-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

