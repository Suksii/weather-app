<template>
    <div class="py-4 bg-blue-900">
        <div class="flex items-center justify-center gap-2" v-if="currentWeather">
            <img :src="Sunny" class="h-6 w-6" v-if="currentWeather.weather"/>
            <span v-if="currentWeather.temperature" class="text-blue-300 text-lg">{{ currentWeather.temperature }}°C</span>
            <span class="text-blue-300 text-lg">{{ selectedCity }}</span>
        </div>
        <div v-else class="flex items-center justify-center gap-2">
           <p class="text-blue-300 tracking-wide text-lg">Weather data will be available soon...</p>
        </div>
    </div>
</template>
<script setup>

import { computed } from "vue";
import { useStore } from "vuex";
import Sunny from "../assets/sunny.png"

const store = useStore();

const selectedCity = computed(() => store.getters.selectedCity);

const currentWeather = computed(() => store.getters.currentWeather)



</script>