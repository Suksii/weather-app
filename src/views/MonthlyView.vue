<template>
    <div class="w-[95%] md:w-[80%] mx-auto grid grid-cols-7 gap-4 py-10">
        <div v-for="item in octoberWeather" :key="item.day"
            class=" bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center p-6 cursor-pointer">
            <p class="text-lg font-semibold text-gray-800">{{ item.day }}</p>
            <img :src="item.weather" class="h-10 w-10"/>
            <div class="flex flex-col items-center">
                <p class="text-2xl font-bold text-blue-600">{{ item.maxTemperature }}</p>
                <p class="text-lg text-gray-700">{{ item.minTemperature }}</p>
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

const octoberWeather = [
    { day: 1, weather: Cloud, minTemperature: '19C', maxTemperature: '24C' },
    { day: 2, weather: Sunny, minTemperature: '18C', maxTemperature: '23C' },
    { day: 3, weather: Sunny, minTemperature: '16C', maxTemperature: '20C' },
    { day: 4, weather: CloudRain, minTemperature: '17C', maxTemperature: '25C' },
    { day: 5, weather: CloudRainSun, minTemperature: '15C', maxTemperature: '21C' },
    { day: 6, weather: CloudRainSun, minTemperature: '14C', maxTemperature: '22C' },
    { day: 7, weather: CloudRainSun, minTemperature: '13C', maxTemperature: '19C' },
    { day: 8, weather: CloudSun, minTemperature: '20C', maxTemperature: '26C' },
    { day: 9, weather: CloudSun, minTemperature: '18C', maxTemperature: '23C' },
    { day: 10, weather: Sunny, minTemperature: '16C', maxTemperature: '22C' },
    { day: 11, weather: Sunny, minTemperature: '19C', maxTemperature: '27C' },
    { day: 12, weather: Sunny, minTemperature: '17C', maxTemperature: '24C' },
    { day: 13, weather: Sunny, minTemperature: '14C', maxTemperature: '21C' },
    { day: 14, weather: Sunny, minTemperature: '15C', maxTemperature: '22C' },
    { day: 15, weather: CloudRain, minTemperature: '16C', maxTemperature: '21C' },
    { day: 16, weather: CloudRainSun, minTemperature: '18C', maxTemperature: '25C' },
    { day: 17, weather: CloudRain, minTemperature: '17C', maxTemperature: '23C' },
    { day: 18, weather: CloudRain, minTemperature: '15C', maxTemperature: '20C' },
    { day: 19, weather: CloudRain, minTemperature: '19C', maxTemperature: '26C' },
    { day: 20, weather: CloudRainSun, minTemperature: '18C', maxTemperature: '24C' },
    { day: 21, weather: Sunny, minTemperature: '13C', maxTemperature: '19C' },
    { day: 22, weather: CloudRainSun, minTemperature: '14C', maxTemperature: '20C' },
    { day: 23, weather: CloudRainSun, minTemperature: '16C', maxTemperature: '21C' },
    { day: 24, weather: Sunny, minTemperature: '18C', maxTemperature: '27C' },
    { day: 25, weather: CloudRainSun, minTemperature: '17C', maxTemperature: '22C' },
    { day: 26, weather: Sunny, minTemperature: '15C', maxTemperature: '20C' },
    { day: 27, weather: Sunny, minTemperature: '19C', maxTemperature: '26C' },
    { day: 28, weather: CloudRainSun, minTemperature: '16C', maxTemperature: '22C' },
    { day: 29, weather: CloudRainSun, minTemperature: '14C', maxTemperature: '21C' },
    { day: 30, weather: CloudRain, minTemperature: '15C', maxTemperature: '22C' },
    { day: 31, weather: CloudRain, minTemperature: '17C', maxTemperature: '23C' }
];

</script>