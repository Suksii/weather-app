<template>
    <div class="w-[95%] md:w-[700px] mx-auto bg-blue-50 my-10 pb-6 rounded-lg shadow-lg overflow-hidden">
        <div class="flex flex-col">
            <div class="flex bg-gradient-to-r from-blue-400 to-blue-600 text-white items-end justify-between py-2 bg-blue-200 rounded-t-lg px-4">
                <p class="text-xl">{{ selectedCity }}, Montenegro</p>
                <p class="text-xl">{{ currentDate }}, {{ currentTime }}</p>
            </div>
            <div v-if="currentWeather" class="p-8 bg-blue-100 flex justify-around items-center">
                <img :src="currentWeather.weather" v-if="currentWeather.weather" alt="weather icon" class="h-24 w-24" />
                <p v-if="currentWeather.temperature" class="text-6xl font-semibold text-gray-800">{{ currentWeather.temperature }}</p>
                <p v-else class="text-6xl text-gray-800">--</p>
            </div>
            <div v-if="currentWeather" class="grid md:grid-cols-2">
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p class="text-gray-600 font-medium">Wind</p>
                    <p v-if="currentWeather.wind" class="text-gray-900">{{ currentWeather.wind }}</p>
                    <p v-else>--</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p class="text-gray-600 font-medium">Humidity</p>
                    <p v-if="currentWeather.humidity" class="text-gray-900">{{ currentWeather.humidity }}</p>
                    <p v-else>--</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p class="text-gray-600 font-medium">Pressure</p>
                    <p v-if="currentWeather.pressure" class="text-gray-900">{{ currentWeather.pressure }}</p>
                    <p v-else>--</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p class="text-gray-600 font-medium">UV Index</p>
                    <p v-if="currentWeather.uv_index" class="text-gray-900">{{ currentWeather.uv_index }}</p>
                    <p v-else>--</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p class="text-gray-600 font-medium">Dew Point</p>
                    <p v-if="currentWeather.dew_point" class="text-gray-900">{{ currentWeather.dew_point }}</p>
                    <p v-else>--</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p class="text-gray-600 font-medium">Visibility</p>
                    <p v-if="currentWeather.visibility" class="text-gray-900">{{ currentWeather.visibility }}</p>
                    <p v-else>--</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex';

const currentTime = ref(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
const currentDate = ref(new Date().toDateString());
const store = useStore();

const updateTime = () => {
    currentTime.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    currentDate.value = new Date().toDateString();
}

onMounted(() => {
    const interval = setInterval(updateTime, 1000);

    onUnmounted(() => {
        clearInterval(interval)
    })
})

const selectedCity = computed(() => store.getters.selectedCity);
const weatherData = computed(() => store.getters.weatherData);


const currentWeather = computed(() => {
    const cityWeather = weatherData.value.find(city => city.id === selectedCity.value);
    if (cityWeather) {
        const currentHour = currentTime.value.split(":")[0].replace("0", "") + currentTime.value.split(" ")[1];
        return cityWeather.hourlyWeather.find(hourData => hourData.hour === currentHour) || null;
    }
    return null;
})

</script>