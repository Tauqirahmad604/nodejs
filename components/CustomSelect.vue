<template>
  <USelectMenu v-bind="$attrs" @click="handleFocus" />
  <!-- @blur="handleBlur" -->
</template>

<script setup>
const attrs = useAttrs();

const handleFocus = (event) => {
  addLabelClass(event);
  attrs.onFocus?.(event);
};

const handleBlur = (event) => {
  removeLabelClass(event);
  attrs.onBlur?.(event);
};

const addLabelClass = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement
    .querySelector("label")
    .classList.add("!translate-y-[-120%]");
};

const removeLabelClass = (event) => {
  // if (event.target.value.trim() === "") {
  //   event.target.parentElement.parentElement.parentElement.parentElement
  //     .querySelector("label")
  //     .classList.remove("!translate-y-[-120%]");
  // }
};
</script>
