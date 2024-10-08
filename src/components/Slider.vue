<template>
    <div class="flex items-center py-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="previousMonth" class="h-6 w-6 cursor-pointer text-blue-800 hover:text-blue-500 duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <div class="relative flex overflow-hidden w-fit justify-center">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(${-100 * currentMonthIndex}%)` }">
                <div v-for="(month, index) in months" :key="index" class="flex-shrink-0 w-full h-full text-center">
                    <p class="text-lg text-blue-800 font-semibold">{{ month }}</p>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="nextMonth" class="h-6 w-6 cursor-pointer text-blue-800 hover:text-blue-500 duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </div>
</template>

<script setup>

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

import { ref } from 'vue';

const currentMonthIndex = ref(new Date().getMonth());

const previousMonth = () => {
    if (currentMonthIndex.value === 0) {
        currentMonthIndex.value = months.length - 1;
    } else {
        currentMonthIndex.value--;
    }
};

const nextMonth = () => {
    if (currentMonthIndex.value === months.length - 1) {
        currentMonthIndex.value = 0;
    } else {
        currentMonthIndex.value++;
    }
}
</script>