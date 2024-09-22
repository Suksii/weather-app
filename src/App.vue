<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection />
    <Navbar />
    <SearchedCitySection />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HeaderSection from './components/HeaderSection.vue';
import SearchedCitySection from './components/SearchedCitySection.vue';

</script>

<style scoped></style>
