<template>
    <div class="w-[95%] md:w-[80%] mx-auto grid grid-cols-7 gap-4 py-10">
        <div v-for="item in octoberWeather" :key="item.day" class=" bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center p-6 cursor-pointer">
            <p class="text-lg font-semibold text-gray-800">{{ item.day }}</p>
            <p class="text-sm text-gray-500">{{ item.weather }}</p>
            <div class="flex flex-col items-center">
                <p class="text-2xl font-bold text-blue-600">{{ item.minTemperature }}</p>
                <p class="text-lg text-gray-700">{{ item.maxTemperature }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const octoberWeather = [
    { day: 1, weather: 'sunny', minTemperature: '19C', maxTemperature: '24C' },
    { day: 2, weather: 'cloudy', minTemperature: '18C', maxTemperature: '23C' },
    { day: 3, weather: 'rainy', minTemperature: '16C', maxTemperature: '20C' },
    { day: 4, weather: 'sunny', minTemperature: '17C', maxTemperature: '25C' },
    { day: 5, weather: 'stormy', minTemperature: '15C', maxTemperature: '21C' },
    { day: 6, weather: 'windy', minTemperature: '14C', maxTemperature: '22C' },
    { day: 7, weather: 'foggy', minTemperature: '13C', maxTemperature: '19C' },
    { day: 8, weather: 'sunny', minTemperature: '20C', maxTemperature: '26C' },
    { day: 9, weather: 'cloudy', minTemperature: '18C', maxTemperature: '23C' },
    { day: 10, weather: 'rainy', minTemperature: '16C', maxTemperature: '22C' },
    { day: 11, weather: 'sunny', minTemperature: '19C', maxTemperature: '27C' },
    { day: 12, weather: 'windy', minTemperature: '17C', maxTemperature: '24C' },
    { day: 13, weather: 'foggy', minTemperature: '14C', maxTemperature: '21C' },
    { day: 14, weather: 'stormy', minTemperature: '15C', maxTemperature: '22C' },
    { day: 15, weather: 'rainy', minTemperature: '16C', maxTemperature: '21C' },
    { day: 16, weather: 'sunny', minTemperature: '18C', maxTemperature: '25C' },
    { day: 17, weather: 'cloudy', minTemperature: '17C', maxTemperature: '23C' },
    { day: 18, weather: 'rainy', minTemperature: '15C', maxTemperature: '20C' },
    { day: 19, weather: 'sunny', minTemperature: '19C', maxTemperature: '26C' },
    { day: 20, weather: 'windy', minTemperature: '18C', maxTemperature: '24C' },
    { day: 21, weather: 'foggy', minTemperature: '13C', maxTemperature: '19C' },
    { day: 22, weather: 'stormy', minTemperature: '14C', maxTemperature: '20C' },
    { day: 23, weather: 'rainy', minTemperature: '16C', maxTemperature: '21C' },
    { day: 24, weather: 'sunny', minTemperature: '18C', maxTemperature: '27C' },
    { day: 25, weather: 'cloudy', minTemperature: '17C', maxTemperature: '22C' },
    { day: 26, weather: 'rainy', minTemperature: '15C', maxTemperature: '20C' },
    { day: 27, weather: 'sunny', minTemperature: '19C', maxTemperature: '26C' },
    { day: 28, weather: 'windy', minTemperature: '16C', maxTemperature: '22C' },
    { day: 29, weather: 'foggy', minTemperature: '14C', maxTemperature: '21C' },
    { day: 30, weather: 'stormy', minTemperature: '15C', maxTemperature: '22C' },
    { day: 31, weather: 'rainy', minTemperature: '17C', maxTemperature: '23C' }
];

</script>