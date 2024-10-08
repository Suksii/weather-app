<template>
    <div class="flex items-center justify-evenly py-2 bg-gradient-to-r from-blue-800 to-blue-900 shadow-md">
        <h1 class="text-xl md:text-2xl text-blue-100 font-bold tracking-wide">Weather Channel Montenegro</h1>
        <div class="relative">
            <input placeholder="Search for city"
                class="rounded-full py-2 px-4 outline-none focus:outline-none bg-blue-50 min-w-[300px] placeholder:text-blue-700 text-blue-800"
                v-model="searchQuery" @input="handleSearch" />
            <ul v-if="searchResults.length > 0" class="absolute w-full bg-blue-50 mt-2 rounded-sm z-40">
                <li v-for="city in searchResults" :key="city.id"
                    class="hover:bg-blue-700 hover:text-blue-50 duration-200 py-1 px-3 cursor-pointer"
                    @click="() => { selectCity(city.id); searchQuery = ''; searchResults.length = 0 }">
                    {{ city.id }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const searchQuery = ref("");
const searchResults = ref([]);
const store = useStore();

onMounted(() => {
    store.dispatch('fetchWeatherData');
});

const weatherData = computed(() => store.getters.weatherData);

const handleSearch = () => {
    if (searchQuery.value.trim() === '') {
        searchResults.value = [];
    } else {
        searchResults.value = weatherData.value.filter(city =>
            city.id.toLocaleLowerCase().includes(searchQuery.value.trim().toLocaleLowerCase())
        )
    }
}

const selectCity = (city) => {
    console.log('selectedCity:', city);
    store.commit('setSelectedCity', city);
}

</script>

