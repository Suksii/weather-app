<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection />
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HeaderSection from './components/HeaderSection.vue';

</script>

<style scoped></style>
