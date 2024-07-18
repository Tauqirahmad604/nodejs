<script setup>
const options = ref([
  { id: 1, name: "bug" },
  { id: 2, name: "documentation" },
  { id: 3, name: "duplicate" },
  { id: 4, name: "enhancement" },
  { id: 5, name: "good first issue" },
  { id: 6, name: "help wanted" },
  { id: 7, name: "invalid" },
  { id: 8, name: "question" },
  { id: 9, name: "wontfix" },
]);

const selected = ref([]);

const labels = computed({
  get: () => selected.value,
  set: async (labels) => {
    const promises = labels.map(async (label) => {
      if (label.id) {
        return label;
      }
      const response = {
        id: options.value.length + 1,
        name: label.name,
      };

      options.value.push(response);

      return response;
    });

    selected.value = await Promise.all(promises);
  },
});

const removeLabel = (index) => {
  selected.value = selected.value.filter((_, i) => i !== index);
};
</script>
<template>
  <div class="w-full relative">
    <USelectMenu
      v-model="labels"
      by="id"
      name="labels"
      :options="options"
      option-attribute="name"
      multiple
      searchable
      icon="icon-jigsaw-search"
      creatable
      show-create-option-when="always"
      placeholder="Select labels"
      class="m-5"
    />
    <div class="flex justify-start items-center gap-4">
      <div
        v-for="(tag, index) in selected"
        :key="tag.id"
        class="bg-[#EBEBEB] px-[20px] py-[10px] rounded-[100px] flex justify-start items-center gap-2"
      >
        <button class="reset-btn" @click="removeLabel(index)">
          <!-- <UIcon
            name="icon-jigsaw-tag-remove"
            class="w-6 h-6 ms-auto transform transition-transform duration-200 fill-slate-500"
          /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 22.0938C17.5228 22.0938 22 17.6166 22 12.0938C22 6.5709 17.5228 2.09375 12 2.09375C6.47715 2.09375 2 6.5709 2 12.0938C2 17.6166 6.47715 22.0938 12 22.0938Z"
              fill="#F25353"
            />
            <path
              d="M13.06 12.0941L15.36 9.7941C15.65 9.5041 15.65 9.0241 15.36 8.7341C15.07 8.4441 14.59 8.4441 14.3 8.7341L12 11.0341L9.69998 8.7341C9.40998 8.4441 8.92999 8.4441 8.63999 8.7341C8.34999 9.0241 8.34999 9.5041 8.63999 9.7941L10.94 12.0941L8.63999 14.3941C8.34999 14.6841 8.34999 15.1641 8.63999 15.4541C8.78999 15.6041 8.97999 15.6741 9.16999 15.6741C9.35999 15.6741 9.54998 15.6041 9.69998 15.4541L12 13.1541L14.3 15.4541C14.45 15.6041 14.64 15.6741 14.83 15.6741C15.02 15.6741 15.21 15.6041 15.36 15.4541C15.65 15.1641 15.65 14.6841 15.36 14.3941L13.06 12.0941Z"
              fill="#FFD1D1"
            />
          </svg>
        </button>
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<style></style>
