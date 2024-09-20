<template>
  <div class="min-h-screen bg-blue-300">
    <Navbar/>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<style scoped>

</style>
