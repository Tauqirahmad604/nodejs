<script setup>
useHead({
  title: 'instructors personnel',
})
definePageMeta({
  title: 'instructors personnel',
  id: 'instructors-personnel',
  parent: { label: 'golf lessons', id: 'golf-lessons' },
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'instructors personnel' },
  ]
})

const columns = [
  {
    key: 'name',
    label: 'Instructors Name'
  }, {
    key: 'Position',
    label: 'Position'
  }, {
    key: 'number',
    label: 'number'
  }, {
    key: 'email',
    label: 'Email'
  }, {
    key: 'gender',
    label: 'gender',
    class: 'center'
  }, {
    key: 'status',
    label: 'status'
  }, {
    key: 'action',
    label: 'action',
    class: 'min-w-40 max-w-40 w-40'
  }
]

const instructors = [
  {
    id: 1,
    display_id: '#6165163',
    name: 'shorowq alqadi',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }, {
    id: 2,
    display_id: '#796453',
    name: 'yasmeen ahmad',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }, {
    id: 3,
    display_id: '#796453',
    name: 'osama al-Habbal',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }, {
    id: 4,
    display_id: '#796453',
    name: 'alaa farhat',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }, {
    id: 5,
    display_id: '#796453',
    name: 'yasmeen ahmad',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }, {
    id: 6,
    display_id: '#796453',
    name: 'maysarah meshial',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }, {
    id: 7,
    display_id: '#796453',
    name: 'hammad mousa',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    Position: 'Golf Manager',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    status: 'active'
  }
]

const instructor = [
  {
    id: 1,
    name: 'shorowq alqadi',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    link: 'https://www.lightspeedhq.com/golf/',
    type: '',
    membership: 'visitor',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    gender: 'female',
    status: 'active'
  }, {
    id: 2,
    name: 'yasmeen ahmad',
    link: 'https://www.lightspeedhq.com/golf/',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'member',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'female',
    status: 'inactive'
  }, {
    id: 3,

    name: 'osama al-Habbal',
    link: 'https://www.lightspeedhq.com/golf/',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'visitor',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'male',
    status: 'active'
  }, {
    id: 4,
    name: 'alaa farhat',
    link: 'https://www.lightspeedhq.com/golf/',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'visitor',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'female',
    status: 'inactive'
  }, {
    id: 5,

    name: 'yasmeen ahmad',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'member',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'male',
    status: 'active'
  }, {
    id: 6,

    name: 'maysarah meshial',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: '',
    membership: 'visitor',
    email: 'rtalal@jigsawme.io',
    phone: '',
    gender: 'male',
    status: 'inactive'
  }, {
    id: 7,
    name: 'hammad mousa',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'visitor',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'male',
    status: 'inactive'
  }
]

const instructorss = [
  {
    id: 1,
    label: 'hammad mousa'
  }, {
    id: 2,
    label: 'jerome bell'
  }, {
    id: 3,
    label: 'sami alhawari'
  }, {
    id: 4,
    label: 'alia sami'
  },
]

const statues = [
  {
    label: 'all'
  }, {
    label: 'active'
  }, {
    label: 'inactive'
  }
]

const page = ref(1)
const pageCount = ref(5)
const pageTotal = ref(instructors?.length)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

const selected = ref([instructors[1]])
const selectedInstructor = ref(instructors[0])
const selectedStatus= ref(statues[0])

</script>

<template>
  <div>
    <div class="flex flex-col gap-y-5">
      <div class="flex items-center">
        <div class="flex-1 flex items-center gap-x-2.5">
          <div class="w-40 border-r">
            <USelectMenu
              v-model="selectedInstructor"
              :options="instructorss"
              :popper="{ placement: 'bottom-start', arrow: true }"
              option-attribute="label"
              size="sm"
              :ui="{ trailing: { padding: { sm: 'pe-8'  } }, color: { white : { outline: 'ring-0' } } }"

            >
              <template #label>
                <div class="flex items-center gap-x-2">
                  <div class="flex-shrink-0">
                    <UIcon name="icon-jigsaw-shirt" class="text-cfuchsia-600 size-6" />
                  </div>
                  <div class="flex flex-col justify-center h-8">
                    <span class="text-gray-400 text-xs  font-medium block capitalize truncate">instructor</span>
                    <span v-if="selectedInstructor?.label" class="text-xs font-semibold block capitalize truncate w-20">{{ selectedInstructor?.label }}</span>
                  </div>
                </div>
              </template>
            </USelectMenu>
          </div>
          <div class="w-36">
            <USelectMenu
              v-model="selectedStatus"
              :options="statues"
              :popper="{ placement: 'bottom-start', arrow: true }"
              option-attribute="label"
              size="sm"
              :ui="{ trailing: { padding: { sm: 'pe-8'  } }, color: { white : { outline: 'ring-0' } } }"
            >
              <template #label>
                <div class="flex items-center gap-x-2">
                  <div class="flex-shrink-0">
                    <UIcon name="icon-jigsaw-shirt" class="text-cfuchsia-600 size-6" />
                  </div>
                  <div class="flex flex-col justify-center h-8">
                    <span class="text-gray-400 text-xs  font-medium block capitalize truncate">status</span>
                    <span v-if="selectedStatus?.label" class="text-xs font-semibold block capitalize truncate w-20">{{ selectedStatus?.label }}</span>
                  </div>
                </div>
              </template>
            </USelectMenu>
          </div>

        </div>
        <div class="flex-shrink-0">
          <UButton label="Add New instructor" icon="icon-jigsaw-plus" color="cbgreen" size="sm" :ui="{ padding: { sm: 'ps-4 pe-5  py-2.5' } }" />
        </div>
      </div>
      <UTable v-model="selected" :columns="columns" :rows="instructors">
        <template #name-data="{ row }">
          <div class="flex items-center">
            <div class="flex-shrink-0 me-5">
              <div class="size-8 rounded-full overflow-hidden">
                <img :src="row?.image" :alt="row?.name" class="size-full object-cover">
              </div>
            </div>
            <div class="flex-1">
              <p class="font-medium capitalize">{{ row?.name }}</p>
              <a :href="row?.link" class="text-[#0047FF] truncate w-40 block">{{row?.link}}</a>
            </div>
          </div>
        </template>
        <template #membership-data="{ row }">
          <div class="flex flex-col">
            <p class="capitalize">{{ row?.type ? row?.type : '---' }}</p>
            <span class="text-gray-400 block capitalize">{{ row?.membership }}</span>
          </div>
        </template>
        <template #phone-data="{ row }">
          <span class="block">{{ row?.phone ? row?.phone : '---' }}</span>
        </template>
        <template #gender-data="{ row }">
          <span class="block capitalize">{{ row?.gender }}</span>
        </template>
        <template #status-data="{ row }">
          <UBadge :label="row?.status" :color="row?.status === 'active' ? 'cbgreen' : 'crose'" size="sm"></UBadge>
        </template>
        <template #action-data="{ row }">
          <div class="flex items-center gap-x-2">
            <UButton icon="icon-jigsaw-eye" size="xs" color="gray" class="text-cblue-700" :ui="{ rounded: 'rounded'}" />
            <UButton icon="icon-jigsaw-edit" size="xs" color="gray" class="text-cgreen-800" :ui="{ rounded: 'rounded'}" />
            <UButton icon="icon-jigsaw-trash" size="xs" color="gray" class="text-crose-500" :ui="{ rounded: 'rounded'}" />
          </div>
        </template>
      </UTable>
      <div class="flex flex-wrap justify-between items-center">
        <div class="text-gray-400">
          <span class="text-sm leading-5">
            Showing
            <span class="font-medium">{{ pageFrom }}</span>
            -
            <span class="font-medium">{{ pageTo }}</span>
            from
            <span class="font-medium">{{ pageTotal }}</span>
          </span>
        </div>

        <UPagination
          v-model="page"
          :page-count="pageCount"
          :total="pageTotal"
        />
      </div>
    </div>
  </div>
</template>
