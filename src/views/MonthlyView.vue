<template>
    <div class="flex flex-col justify-center items-center">
        <Slider :items="availableYears" :initialSelectedItem="selectedYear" @update="setSelectedYear" />
        <Slider :items="months" :initialSelectedItem="selectedMonth" @update="setSelectedMonth" />
        <div class="w-[95%] md:w-[80%] mx-auto grid grid-cols-7 gap-4 py-10">
            <div v-for="item in filteredMonthlyWeather" :key="item.month"
                class=" bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center p-6 cursor-pointer">
                <p class="text-lg font-semibold text-gray-800">{{ item.month }}</p>
                <!-- <img :src="item.weather" class="h-10 w-10"/> -->
                <p>{{ item.weather }}</p>
                <div class="flex flex-col items-center">
                    <p class="text-2xl font-bold text-blue-600">{{ item.max_temperature }}</p>
                    <p class="text-lg text-gray-700">{{ item.min_temperature }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useStore } from "vuex"
import { computed, ref } from "vue"
import Slider from "@/components/Slider.vue";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const store = useStore();

const availableYears = computed(() => {
    const cityData = store.getters.weatherData.find(city => city.id === store.getters.selectedCity);
    return cityData ? cityData.monthlyWeather.map(year => year.year) : [];
});
const selectedCity = computed(() => store.getters.selectedCity);
const weatherData = computed(() => store.getters.weatherData);

const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(months[new Date().getMonth()]);

const setSelectedYear = (year) => {
    selectedYear.value = year;
}
const setSelectedMonth = (month) => {
    selectedMonth.value = month;
}

// const monthlyWeather = computed(() => {
//     const cityWeather = weatherData.value.find(city => city.id === selectedCity.value);

//     return cityWeather ? cityWeather.monthlyWeather[0].monthsWeather[1].daysWeather : [];
// })

const filteredMonthlyWeather = computed(() => {
    const cityWeather = weatherData.value.find(city => city.id === selectedCity.value);

    if (cityWeather) {
        const yearData = cityWeather.monthlyWeather.find(year => year.year == selectedYear.value);
        if (yearData) {
            const monthData = yearData.monthsWeather.find(month => month.month === selectedMonth.value);
            console.log(monthData);

            return monthData ? monthData.daysWeather : [];
        }
    }
    return [];
});


</script>