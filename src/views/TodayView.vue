<template>
    <div class="w-[800px] mx-auto bg-blue-50 my-10 pb-6 rounded-lg">
        <div class="flex flex-col">
            <div class="flex items-end justify-between py-2 bg-blue-200 rounded-t-lg px-4">
                <p class="text-xl">Podgorica, Montenegro</p>
                <p class="text-xl">{{ currentTime }}</p>
            </div>
            <div class="p-8 bg-blue-100 flex justify-between items-center">
                    <img :src="Sunny" alt="sunny" class="h-24 w-24"/>
                    <p class="text-6xl">28°C</p>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex justify-between py-2 mx-4 px-2 border-b border-black">
                    <p>Wind</p>
                    <p>SW 7km/h</p>
                </div>
                <div class="flex justify-between py-2 mx-4 px-2 border-b border-black">
                    <p>Humidity</p>
                    <p>47%</p>
                </div>
                <div class="flex justify-between py-2 mx-4 px-2 border-b border-black">
                    <p>Pressure</p>
                    <p>1011.2 mb</p>
                </div>
                <div class="flex justify-between py-2 mx-4 px-2 border-b border-black">
                    <p>UV Index</p>
                    <p>2 of 11</p>
                </div>
                <div class="flex justify-between py-2 mx-4 px-2 border-b border-black">
                    <p>Dew Point</p>
                    <p>16°</p>
                </div>
                <div class="flex justify-between py-2 mx-4 px-2 border-b border-black">
                    <p>Visibility</p>
                    <p>Unlimited</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import Sunny from '../assets/sunny.png'
</script>