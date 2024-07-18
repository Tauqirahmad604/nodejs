<script setup>
definePageMeta({
  title: 'promotions and discounts',
  id: 'promotions-and-discounts',
  parent: { label: 'general settings', id: 'general-settings' },
  breadcrumb: [
    { label: 'home', to: '/' },
    { label: 'promotions and discounts' },
  ]
})
const toast = useToast()
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
    key: 'title',
    label: 'title'
  }, {
    key: 'type',
    label: 'type'
  }, {
    key: 'coupon',
    label: 'Coupon Code'
  }, {
    key: 'time',
    label: 'Start & End'
  }, {
    key: 'facility',
    label: 'Facility & Module',
  }, {
    key: 'status',
    label: 'status'
  },
  {
    key: 'action',
    label: 'action',
    class: 'min-w-40 max-w-40 w-40'
  }
]


const promosions = [
  {
    id: 1,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '0HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'cbgreen',
      background : '#050'
    }
  },   {
    id: 2,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '1HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'crose',
      background : '#050'
    }
  },   {
    id: 3,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '2HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'cbgreen',
      background : '#050'
    }
  },  {
    id: 4,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '3HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'crose',
      background : '#050'
    }
  },   {
    id: 5,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '4HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'cbgreen',
      background : '#050'
    }
  },   {
    id: 6,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '5HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'crose',
      background : '#050'
    }
  },   {
    id: 7,
    display_id: '#6165163',
    title:'Eid Al-Adha',
    des:'Regular Discount in all',
    type:'Discount',
    coupon: '6HpyAdhaEid76',
    start: '09-06-2024',
    end:'30-06-2024',
    facility : 'Derab Golf Club',
    module : 'Golf Lesson',
    status: {
      label :'active',
      color : 'cbgreen',
      background : '#050'
    }
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


const modules = [
  {
    label: 'All Modules'
  },{
    label: 'Equestrian'
  }, {
    label: 'Equestrian'
  }
]

const promotions = [
  {
    label: 'all'
  }, {
    label: 'Discount'
  }, {
    label: 'Promocode'
  }
]

const facilities = [
  {
    label: 'all'
  }, {
    label: 'RGC'
  }, {
    label: 'DGC'
  }
]


const page = ref(1)
const pageCount = ref(5)
const pageTotal = ref(promosions?.length)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

const selected = ref([promosions[1]])
const selectedInstructor = ref(instructors[0])
const selectedStatus= ref(statues[0])
const SelectedModule =ref(modules[0]);
const SelectedFacility =ref(facilities[0]);
const SelectedPromotion =ref(promotions[0]);
const contentToCopy = ref(null);


const copyContent = (content) => {
  console.log(navigator.clipboard.writeText(content))
  navigator.clipboard.writeText(content).then(() => {
    toast.add({ title: 'The coupon code copied' })
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


</script>

<template>
  <div>
    <div class="flex flex-col gap-y-5">
      <div class="flex items-center">
        <div class="flex-1 flex items-center gap-x-2.5">
          <div class="w-48 border-r">
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
                    <span class="text-gray-400 text-xs  font-medium block capitalize truncate">Status</span>
                    <span v-if="selectedStatus?.label" class="text-xs font-semibold block capitalize truncate w-20">{{ selectedStatus?.label }}</span>
                  </div>
                </div>
              </template>
            </USelectMenu>
          </div>
          <div class="w-48 border-r">
            <USelectMenu
              v-model="SelectedPromotion"
              :options="promotions"
              :popper="{ placement: 'bottom-start', arrow: true }"
              option-attribute="label"
              size="sm"
              :ui="{ trailing: { padding: { sm: 'pe-8'  } }, color: { white : { outline: 'ring-0' } } }"
            >
              <template #label>
                <div class="flex items-center gap-x-2">
                  <div class="flex-shrink-0">
                    <UIcon name="icon-jigsaw-hat" class="text-cfuchsia-600 size-6" />
                  </div>
                  <div class="flex flex-col justify-center h-8">
                    <span class="text-gray-400 text-xs  font-medium block capitalize truncate">Promotion Type</span>
                    <span v-if="SelectedPromotion?.label" class="text-xs font-semibold block capitalize truncate w-20">{{ SelectedPromotion?.label }}</span>
                  </div>
                </div>
              </template>
            </USelectMenu>
          </div>
          <div class="w-48 border-r">
            <USelectMenu
              v-model="SelectedFacility"
              :options="facilities"
              :popper="{ placement: 'bottom-start', arrow: true }"
              option-attribute="label"
              size="sm"
              :ui="{ trailing: { padding: { sm: 'pe-8'  } }, color: { white : { outline: 'ring-0' } } }"
            >
              <template #label>
                <div class="flex items-center gap-x-2">
                  <div class="flex-shrink-0">
                    <UIcon name="icon-jigsaw-flag" class="text-cfuchsia-600 size-6" />
                  </div>
                  <div class="flex flex-col justify-center h-8">
                    <span class="text-gray-400 text-xs  font-medium block capitalize truncate">Facility</span>
                    <span v-if="SelectedFacility?.label" class="text-xs font-semibold block capitalize truncate w-20">{{ SelectedFacility?.label }}</span>
                  </div>
                </div>
              </template>
            </USelectMenu>
          </div>
          <div class="w-48 border-r">
            <USelectMenu
              v-model="SelectedModule"
              :options="modules"
              :popper="{ placement: 'bottom-start', arrow: true }"
              option-attribute="label"
              size="sm"
              :ui="{ trailing: { padding: { sm: 'pe-8'  } }, color: { white : { outline: 'ring-0' } } }"

            >
              <template #label>
                <div class="flex items-center gap-x-2">
                  <div class="flex-shrink-0">
                    <UIcon name="icon-jigsaw-calendar" class="text-cfuchsia-600 size-6" />
                  </div>
                  <div class="flex flex-col justify-center h-8">
                    <span class="text-gray-400 text-xs  font-medium block capitalize truncate">Module</span>
                    <span v-if="SelectedModule?.label" class="text-xs font-semibold block capitalize truncate w-20">{{ SelectedModule?.label }}</span>
                  </div>
                </div>
              </template>
            </USelectMenu>
          </div>


        </div>
        <div class="flex-shrink-0">
          <UButton label="Add New Code" icon="icon-jigsaw-plus" color="cbgreen" size="sm" :ui="{ padding: { sm: 'ps-4 pe-5  py-2.5' } }" />
        </div>
      </div>
      <UTable v-model="selected" :columns="columns2" :rows="promosions">
        <template #title-data="{ row }">
          <div class="flex items-center">
            <div class="flex-1 flex gap-1 flex-col">
              <p class="font-medium capitalize text-[#1E2F44]">{{ row?.title }}</p>
              <span class="text-gray-400 block">{{ row?.des }}</span>
            </div>
          </div>
        </template>
        <template #type-data="{ row }">
          <div class="flex flex-col">
            <p class="font-medium  capitalize">{{ row?.type ? row?.type : '---' }}</p>
          </div>
        </template>
        <template #coupon-data="{ row }">
          <div class="flex w-52 h-11 px-4 border border-solid border-[#9D9D9D] bg-white rounded-xl items-center justify-between ">
            <p class="capitalize font-bold" ref="contentToCopy">{{ row?.coupon ? row?.coupon : '---' }}</p>
            <UButton icon="icon-jigsaw-copy" @click="copyContent(row?.coupon)" class="text-[#2C3B84] bg-white p-0  hover:bg-transparent" />
          </div>
        </template>
        <template #time-data="{ row }">
          <div class="flex items-center">
            <div class="flex-1 flex gap-1 flex-col">
              <p class="capitalize text-[#1E2F44]">{{ row?.start }}</p>
              <p class="capitalize text-[#FF4949]">{{ row?.end }}</p>
            </div>
          </div>
        </template>
        <template #facility-data="{ row }">
          <div class="flex items-center">
            <div class="flex-1 flex gap-1 flex-col">
              <p class="capitalize text-[#1E2F44]">{{ row?.facility  }}</p>
              <p class="capitalize text-[#2C3B84] font-bold">{{ row?.module }}</p>
            </div>
          </div>
        </template>
        <template #status-data="{ row }">
          <UBadge :label="row?.status?.label" :color="row?.status?.color" size="sm">
          </UBadge>

        </template>
        <template #action-data="{ row }">
          <div class="flex items-center gap-x-2">
            <UButton icon="icon-jigsaw-eye" size="xs" color="gray" class="text-cblue-700" :ui="{ rounded: 'rounded'}"@click="" />
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
