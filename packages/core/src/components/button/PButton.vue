<script setup lang="ts">
import { PropType, useSlots } from "vue";
import "uno.css";
// import "iconify-icon";
const slots: any = useSlots();
// defineOptions({
//   name: "UlButton"
// })
type IType = "primary" | "common" | "success" | "danger" | "warning" | "empty";
type IRing = "shallow" | "dark";
const types = {
  primary: "indigo",
  common: "gray",
  success: "emerald",
  danger: "red",
  warning: "amber",
};
defineProps({
  type: { type: String as PropType<IType>, default: "empty" },
  icon: { type: String },
  circle: { type: Boolean, default: false },
  focus: { type: String as PropType<IRing> },
  outline: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});
</script>

<template>
  <!-- TODO template -->
  <button title="ul-button" type="button" :class="[`
  py-2
  px-3
  font-normal
  text-3
  leading-3
  mx-1
  cursor-pointer
  ${circle ? 'rounded-full' : 'rounded-lg'}
  ${
    type !== 'empty'
      ? `
  text-${outline ? `${types[type]}-500` : `white`}
  ${outline ? `hover:text-white` : ``}
  bg-${types[type]}-${outline ? '100' : '500'}
  hover:bg-${types[type]}-${outline ? '500' : '400'}
  ${
    focus
      ? `focus:ring-3 ring-inset ring-opacity-50 focus:ring-${types[type]}-${
          focus === 'shallow' ? '400' : '600'
        }`
      : ``
  }
  ${outline ? `border-${types[type]}-500` : 'border-none '}
    `
      : `
  border-gray-500
  text-gray-500
    `
  }`,
  ]">
    <!-- <div v-if="icon && !loading" :class="`i-ic-baseline-${icon}`"></div> -->
    <span v-if="slots.hasOwnProperty('default')" :class="`${loading ? `ml-5` : ``}`">{{ slots.default()[0]["children"]
    }}</span>
  </button>
</template>

<style scoped>
/** TODO CSS**/
</style>
