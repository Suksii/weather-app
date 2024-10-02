<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection @citySelected="updateCity"/>
    <Navbar />
    <SearchedCitySection :city="selectedCity"/>
    <!-- <TodayView :city="selectedCity"/> -->
    <HourlyView />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HeaderSection from './components/HeaderSection.vue';
import SearchedCitySection from './components/SearchedCitySection.vue';
import TodayView from './views/TodayView.vue'
import { ref } from 'vue';
import HourlyView from './views/HourlyView.vue';

const selectedCity = ref('Podgorica, Montenegro')

const updateCity = (city) => {
  selectedCity.value = `${city}, Montenegro`
}

</script>

<style scoped></style>
