<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection />
    <Navbar />
    <SearchedCitySection />
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


const selectedCity = ref('Podgorica')
const router = useRouter();
const route = useRoute();
const store = useStore();

const updateCity = (city) => {
  store.commit('setSelectedCity', city)
  router.push({ name: route.name, params: { city } })
}

onMounted(async () => {
  await store.dispatch('fetchWeatherData');
  const weatherData = store.getters.weatherData;
  console.log('Weather Data:', weatherData);
});

watch(() => route.params.city, (newCity) => {
  if (newCity) {
    store.commit('setSelectedCity', newCity)
  }
})

</script>

<style scoped></style>
