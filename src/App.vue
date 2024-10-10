<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex flex-col justify-between font-lato">
    <div>
      <HeaderSection />
      <Navbar />
      <SearchedCitySection />
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :city="selectedCity" />
      </RouterView>
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeaderSection from './components/HeaderSection.vue';
import SearchedCitySection from './components/SearchedCitySection.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import FooterSection from './components/FooterSection.vue';


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
});

watch(() => route.params.city, (newCity) => {
  if (newCity) {
    store.commit('setSelectedCity', newCity)
  }
})

watch(() => store.state.selectedCity, (newCity) => {
  if (newCity && newCity !== route.params.city) updateCity(newCity)
})

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
</style>
