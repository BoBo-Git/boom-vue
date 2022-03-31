<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 1px;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 10px;
}

.test {
  margin: auto;
  color: #bbb;
  position: relative;
  padding: 0;

  &-box {
    @apply h-full;

    text-align: center;
    color: #000;
    position: fixed;
  }

  .a {
    padding: 0;
  }
}
</style>
