<template>
  <div class="min-h-screen bg-blue-300">
    <HeaderSection @citySelected="updateCity" />
    <Navbar />
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
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const selectedCity = ref('Podgorica, Montenegro')
const router = useRouter();
const route = useRoute();

const updateCity = (city) => {
  selectedCity.value = `${city}, Montenegro`
  router.push({ name: route.name, params: { city } })
}

watch(() => route.params.city, (newCity) => {
  if (newCity) {
    selectedCity.value = `${newCity}, Montenegro`
  }
})

</script>

<style scoped></style>
