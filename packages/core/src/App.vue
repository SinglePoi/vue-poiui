<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div class="i-ic-baseline-search"></div>
  <p-button type="primary" icon="search">示例按钮</p-button>
  <p-button type="common">示例按钮</p-button>
  <p-button type="success">示例按钮</p-button>
  <p-button type="danger">示例按钮</p-button>
  <p-button type="warning">示例按钮</p-button>
  <p-button type="primary" outline>示例按钮</p-button>
  <p-button type="common" outline>示例按钮</p-button>
  <p-button type="success" outline>示例按钮</p-button>
  <p-button type="danger" outline>示例按钮</p-button>
  <p-button type="warning" outline>示例按钮</p-button>
  <p-button type="primary" outline circle>示例按钮</p-button>
  <p-button type="common" outline circle>示例按钮</p-button>
  <p-button type="success" outline circle>示例按钮</p-button>
  <p-button type="danger" outline circle>示例按钮</p-button>
  <p-button type="warning" outline circle icon="search">示例按钮</p-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
