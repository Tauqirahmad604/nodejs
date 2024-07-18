<script setup>
useHead({
  title: 'lessons / activities',
})
definePageMeta({
  title: 'lessons / activities',
  id: 'lessons-and-activities',
  parent: { label: 'golf lessons', id: 'golf-lessons' },
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'lessons / activities' },
  ]
})

const columns = [
  {
    key: 'name',
    label: 'Player Name'
  }, {
    key: 'phone',
    label: 'phone'
  }, {
    key: 'email',
    label: 'email'
  }, {
    key: 'membership',
    label: 'membership'
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


const columns2 = [
  {
    key: 'name',
    label: 'Lesson Name'
  }, {
    key: 'category',
    label: 'Category'
  }, {
    key: 'duration',
    label: 'Duration'
  }, {
    key: 'created',
    label: 'Created At'
  }, {
    key: 'facility',
    label: 'Facility',
  }, {
    key: 'capacity',
    label: 'Capacity'
  },{
    key: 'status',
    label: 'Status'
  }, {
    key: 'action',
    label: 'action',
    class: 'min-w-40 max-w-40 w-40'
  }
]

const players = [
  {
    id: 1,
    display_id: '#6165163',
    name: 'shorowq alqadi',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: '',
    membership: 'visitor',
    email: 'maher.jouda@gmail.com',
    phone: '+(966) 609 87 5333',
    gender: 'female',
    status: 'active'
  }, {
    id: 2,
    display_id: '#796453',
    name: 'yasmeen ahmad',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'member',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'female',
    status: 'inactive'
  }, {
    id: 3,
    display_id: '#796453',
    name: 'osama al-Habbal',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'visitor',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'male',
    status: 'active'
  }, {
    id: 4,
    display_id: '#796453',
    name: 'alaa farhat',
    image: 'https://avatars.githubusercontent.com/u/7547335?v=4',
    type: 'client',
    membership: 'visitor',
    email: 'rtalal@jigsawme.io',
    phone: '+(966) 609 87 5333',
    gender: 'female',
    status: 'inactive'
  }, {
    id: 5,
    display_id: '#796453',
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
    display_id: '#796453',
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
    display_id: '#796453',
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

const lessons = [
  {
    id: 1,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }, {
    id: 2,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }, {
    id: 3,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }, {
    id: 4,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }, {
    id: 5,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }, {
    id: 6,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }, {
    id: 7,
    display_id: '#1531513-64',
    name: 'Golf Practice',
    link: 'https://www.lightspeedhq.com/golf/',
    category: 'Golf Training',
    duration: '1:30 HR',
    created: '16-08-2024',
    facility: 'DIRAB GOLF Club',
    capacity: '3',
    status: 'active'
  }
]


const instructors = [
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
const pageTotal = ref(lessons?.length)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

const selected = ref([lessons[1]])
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
              :options="instructors"
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
          <UButton label="Add New Lessons" icon="icon-jigsaw-plus" color="cbgreen" size="sm" :ui="{ padding: { sm: 'ps-4 pe-5  py-2.5' } }" />
        </div>
      </div>
      <UTable v-model="selected" :columns="columns2" :rows="lessons">
        <template #name-data="{ row }">
          <div class="flex items-center">
            <div class="flex-shrink-0 me-5">
              <div class="size-8 rounded-full overflow-hidden">
                <!-- <img :src="row?.image" :alt="row?.name" class="size-full object-cover"> -->
                <img src="/assets/images/flag.png" alt="jigsaw tbook">
              </div>
            </div>
            <div class="flex-1">
              <p class="font-medium capitalize">{{ row?.name }}</p>
              <span class="text-[#1E2F44] block text-xs">ID: {{ row?.display_id }}</span>
              <a :href="row?.link" class="text-[#0047FF] truncate w-40 ">{{row?.link}}</a>
            </div>
          </div>
        </template>
        <template #category-data="{ row }">
          <div class="flex flex-col">
            <p class="capitalize">{{  row?.category ?  row?.category : '---' }}</p>
          </div>
        </template>
        <template #duration-data="{ row }">
          <div class="flex flex-col">
            <p class="capitalize font-bold">{{ row?.duration ? row?.duration : '---' }}</p>
          </div>
        </template>
        <template #created-data="{ row }">
          <span class="block font-rajdhani text-xm text-[#2C3B84]">{{ row?.created ? row?.created : '---' }}</span>
        </template>
        <template #facility-data="{ row }">
          <span class="block font-rajdhani text-xm text-[#2C3B84]">{{ row?.facility }}</span>
        </template>
        <template #capacity-data="{ row }">
          <p class="capitalize flex items-center gap-2 text-xs"> <span class="w-6 h-6 bg-[#E1FF29] text-[#1E2F44] flex items-center justify-center text-xs">{{ row?.capacity }} </span> players</p>
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
