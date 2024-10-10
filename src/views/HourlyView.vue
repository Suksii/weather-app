<template>
    <div class="w-[95%] md:w-[80%] mx-auto py-10">
        <div v-for="(temperature, index) in hourlyWeather" :key="temperature.hour" class="">
            <div
                class="flex justify-between items-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <p v-if="temperature.hour" class="text-lg font-semibold text-gray-700">{{ temperature.hour }}</p>
                <p v-else>--</p>
                <img v-if="temperature.weather" :src="temperature.weather" alt="weather" class="h-10 w-10" />
                <p v-else>--</p>
                <p v-if="temperature.temperature" class="text-lg font-semibold text-gray-700">{{ temperature.temperature
                    }} °C</p>
                <p v-else>--</p>
                <p @click="toggleDetails(index)" class="cursor-pointer">
                    <svg :class="!toggle.includes(index) ? '' : 'rotate-180'" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="h-6 w-6 transition-transform transform hover:scale-110">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </p>
            </div>
            <div :class="toggle.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 py-0'"
                class="overflow-hidden bg-blue-50 ring-2 ring-blue-200 grid grid-cols-3 gap-6 my-4 rounded-lg p-6 transition-all duration-500 ease-in-out">
                <p class="flex flex-col items-center text-gray-600">
                    <span class="font-semibold">Dew Point</span>
                    <span v-if="temperature.dew_point">{{ temperature.dew_point }} °C</span>
                    <span v-else>--</span>
                </p>
                <p class="flex flex-col items-center text-gray-600">
                    <span class="font-semibold">Pressure</span>
                    <span v-if="temperature.pressure">{{ temperature.pressure }} mb</span>
                    <span v-else>--</span>
                </p>
                <p class="flex flex-col items-center text-gray-600">
                    <span class="font-semibold">UV Index</span>
                    <span v-if="temperature.uv_index">{{ temperature.uv_index }}</span>
                    <span v-else>--</span>
                </p>
                <p class="flex flex-col items-center text-gray-600">
                    <span class="font-semibold">Wind</span>
                    <span v-if="temperature.wind">{{ temperature.wind }} km/h</span>
                    <span v-else>--</span>
                </p>
                <p class="flex flex-col items-center text-gray-600">
                    <span class="font-semibold">Humidity</span>
                    <span v-if="temperature.humidity">{{ temperature.humidity }} %</span>
                    <span v-else>--</span>
                </p>
                <p class="flex flex-col items-center text-gray-600">
                    <span class="font-semibold">Visibility</span>
                    <span v-if="temperature.visibility">{{ temperature.visibility }}</span>
                    <span v-else>--</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed, ref } from "vue"
import { parse } from "vue/compiler-sfc";
import { useStore } from "vuex"

const store = useStore();
const toggle = ref([]);

const selectedCity = computed(() => store.getters.selectedCity);

const hourlyWeather = computed(() => {
    const cityWeather = store.getters.weatherData.find(city => city.id === selectedCity.value);
    return cityWeather
        ? cityWeather.hourlyWeather.sort((a, b) => {
            const aPeriod = a.hour.includes('AM') ? 0 : 1;
            const bPeriod = b.hour.includes('AM') ? 0 : 1;

            if (aPeriod !== bPeriod) {
                return aPeriod - bPeriod;
            }

            const aHour = parseInt(a.hour.replace(/\D+/g, ''), 10);
            const bHour = parseInt(b.hour.replace(/\D+/g, ''), 10);

            return aHour - bHour;
        })
        : [];
})

const toggleDetails = (index) => {
    if (toggle.value.includes(index)) {
        toggle.value = toggle.value.filter(i => i !== index)
    } else {
        toggle.value.push(index)
    }
}

// const temperatures = [
//     {
//         hour: "12AM",
//         weather: Cloud,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "1AM",
//         weather: Sunny,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "2AM",
//         weather: CloudRain,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "3AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "4AM",
//         weather: CloudSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "5AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "6AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "7AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "8AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "9AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "10AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "11AM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "12PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "1PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "2PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "3PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "4PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "5PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "6PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "7PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "8PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "9PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "10PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
//     {
//         hour: "11PM",
//         weather: CloudRainSun,
//         temperature: "30C",
//         dew_point: "16C",
//         pressure: "1011",
//         uv_index: "2 of 11",
//         wind: "16km/h",
//         humidity: "47%",
//         visibility: "unlimited"
//     },
// ]


</script>