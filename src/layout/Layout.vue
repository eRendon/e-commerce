<script setup lang="ts">
import Menu from './Menu.vue'
import Toast from 'primevue/toast'
</script>

<template>
  <div class="app-container">
    <Menu class="fixed left-0 top-0 w-full z-5"></Menu>
    <Toast position="bottom-right"/>

    <router-view ></router-view>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
}

router-view {

}
</style>
