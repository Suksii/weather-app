<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection @citySelected="updateCity" />
    <Navbar />
    <SearchedCitySection :city="selectedCity" />
    <TodayView :city="selectedCity" />
    <HourlyView />
    <MonthlyView />
    <RouterView />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeaderSection from './components/HeaderSection.vue';
import SearchedCitySection from './components/SearchedCitySection.vue';
import { ref } from 'vue';


const selectedCity = ref('Podgorica, Montenegro')

const updateCity = (city) => {
  selectedCity.value = `${city}, Montenegro`
}

</script>

<style scoped></style>
