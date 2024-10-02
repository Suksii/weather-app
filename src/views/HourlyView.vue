<template>
    <div class="w-[80%] mx-auto py-10">
        <div v-for="(temperature, index) in temperatures" :key="temperature.hour" class="py-2">
            <div class="flex justify-evenly">
                <p>{{ temperature.hour }}</p>
                <img :src="temperature.weather" alt="" class="h-10 w-10">
                <p>{{ temperature.temperature }}</p>
                <p @click="toggleDetails(index)" class="cursor-pointer">
                    <svg v-if="!toggle.includes(index)" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </p>
            </div>
            <div v-if="toggle.includes(index)" class="w-[80%] mx-auto ring-2 ring-blue-900 grid grid-cols-3 gap-4 my-2 rounded-md">
                <p class="flex flex-col items-center"><span>Dew Point</span>{{ temperature.dew_point }}</p>
                <p class="flex flex-col items-center"><span>Pressure</span>{{ temperature.pressure }}</p>
                <p class="flex flex-col items-center"><span>Index</span>{{ temperature.uv_index }}</p>
                <p class="flex flex-col items-center"><span>Wind</span>{{ temperature.wind }}</p>
                <p class="flex flex-col items-center"><span>Humidity</span>{{ temperature.humidity }}</p>
                <p class="flex flex-col items-center"><span>Visibility</span>{{ temperature.visibility }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import Cloud from "../assets/cloud.png"
import Sunny from "../assets/sunny.png"
import CloudRain from "../assets/cloud&rain.png"
import CloudRainSun from "../assets/cloud&rain&sun.png"
import CloudSun from "../assets/cloud&sun.png"
import { ref } from "vue"

const toggle = ref([]);

const toggleDetails = (index) => {
    if (toggle.value.includes(index)) {
        toggle.value = toggle.value.filter(i => i !== index)
    } else {
        toggle.value.push(index)
    }
}

const temperatures = [
    {
        hour: "12AM",
        weather: Cloud,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "1AM",
        weather: Sunny,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "2AM",
        weather: CloudRain,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "3AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "4AM",
        weather: CloudSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "5AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "6AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "7AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "8AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "9AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "10AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "11AM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "12PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "1PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "2PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "3PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "4PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "5PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "6PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "7PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "8PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "9PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "10PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
    {
        hour: "11PM",
        weather: CloudRainSun,
        temperature: "30C",
        dew_point: "16C",
        pressure: "1011",
        uv_index: "2 of 11",
        wind: "16km/h",
        humidity: "47%",
        visibility: "unlimited"
    },
]


</script>