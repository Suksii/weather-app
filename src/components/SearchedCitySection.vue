<template>
    <div class="py-4 bg-gradient-to-r from-blue-900 to-blue-800 shadow-md">
        <div class="flex items-center justify-center gap-2 text-blue-200 font-medium" v-if="currentWeather">
            <img :src="Sunny" class="h-6 w-6" v-if="currentWeather.weather"/>
            <span v-if="currentWeather.temperature" class="text-xl">{{ currentWeather.temperature }}°C</span>
            <span class="text-blue-200 text-xl">{{ selectedCity }}, Montenegro</span>
        </div>
        <div v-else class="flex items-center justify-center gap-2">
           <p class="text-blue-200 tracking-wide text-lg">Weather data will be available soon...</p>
        </div>
    </div>
</template>
<script setup>

import { computed } from "vue";
import { useStore } from "vuex";
import Sunny from "../assets/sunny.png"

const store = useStore();

const selectedCity = computed(() => store.getters.selectedCity);

const currentWeather = computed(() => store.getters.currentWeather);

</script>