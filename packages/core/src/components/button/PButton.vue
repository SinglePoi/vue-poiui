<script setup lang="ts">
import { PropType, useSlots } from "vue";
import type { Slots } from "vue";
import "uno.css";
// import "iconify-icon";
const slots: any = useSlots();
// defineOptions({
//   name: "UlButton"
// })
type IType = "primary" | "common" | "success" | "danger" | "warning";

const types = {
  primary: "blue",
  common: "light",
  success: "emerald",
  danger: "red",
  warning: "orange",
};
defineProps({
  type: { type: String as PropType<IType>, default: "primary" },
  icon: { type: String },
  circle: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});
</script>

<template>
  <button
    title="ul-button"
    type="button"
    :class="[
      `py-2 px-3 font-normal text-3 leading-3 mx-1 cursor-pointer`,
      circle ? 'rounded-full' : 'rounded',
      `text-${
        outline
          ? `${type === 'common' ? 'gray' : types[type]}-500`
          : `${type === 'common' ? 'gray-500' : 'white'}`
      }`,
      outline
        ? `hover:text-white border border-${
            type === 'common' ? 'gray' : `${types[type]}`
          }-500`
        : `border-none`,
      `bg-${types[type]}-${outline ? '100' : '500'}`,
      `hover:bg-${type === 'common' && outline ? 'gray' : types[type]}-${
        outline ? '500' : '400'
      }`,
    ]"
  >
    <div
      v-if="icon && !loading"
      :class="`i-ic-baseline-${icon}`"
      class="absolute"
    ></div>
    <span :class="`${loading || icon ? `ml-4` : ``}`">{{
      slots.default()[0]["children"]
    }}</span>
  </button>
</template>

<style scoped>
/** TODO CSS**/
</style>
