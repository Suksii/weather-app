<template>
    <div class="w-[800px] mx-auto bg-blue-50 my-10 pb-6 rounded-lg">
        <div class="flex flex-col">
            <div class="flex items-end justify-between py-2 bg-blue-200 rounded-t-lg px-4">
                <p class="text-xl">{{ selectedCity }}</p>
                <p class="text-xl">{{ currentDate }}, {{ currentTime }}</p>
            </div>
            <div v-if="currentWeather" class="p-8 bg-blue-100 flex justify-between items-center">
                <img :src="currentWeather.weather" alt="weather icon" class="h-24 w-24" />
                <p class="text-6xl">{{ currentWeather.temperature }}</p>
            </div>
            <div v-if="currentWeather" class="grid grid-cols-2">
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p>Wind</p>
                    <p>{{ currentWeather.wind }}</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p>Humidity</p>
                    <p>{{ currentWeather.humidity }}</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p>Pressure</p>
                    <p>{{ currentWeather.pressure }}</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p>UV Index</p>
                    <p>{{ currentWeather.uv_index }}</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p>Dew Point</p>
                    <p>{{ currentWeather.dew_point }}</p>
                </div>
                <div class="flex justify-between py-1 pt-2 mx-4 px-2 border-b border-black">
                    <p>Visibility</p>
                    <p>{{ currentWeather.visibility }}</p>
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