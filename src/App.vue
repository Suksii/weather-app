<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection @citySelected="updateCity" />
    <Navbar :city="selectedCity" />
    <SearchedCitySection :city="selectedCity" />
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :city="selectedCity" />
    </RouterView>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeaderSection from './components/HeaderSection.vue';
import SearchedCitySection from './components/SearchedCitySection.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';


const selectedCity = ref('Podgorica, Montenegro')
const router = useRouter();
const route = useRoute();
const store = useStore();

const updateCity = (city) => {
  selectedCity.value = `${city}, Montenegro`
  router.push({ name: route.name, params: { city } })
}

onMounted(async () => {
  await store.dispatch('fetchWeatherData');
  const weatherData = store.getters.weatherData;
  console.log('Weather Data:', weatherData);
});

watch(() => route.params.city, (newCity) => {
  if (newCity) {
    selectedCity.value = `${newCity}, Montenegro`
  }
})

</script>

<style scoped></style>
