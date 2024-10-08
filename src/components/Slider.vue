<template>
    <div class="flex items-center py-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="previousItem" class="h-6 w-6 cursor-pointer text-blue-800 hover:text-blue-500 duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <div class="relative flex overflow-hidden w-fit justify-center">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(${-100 * currentIndex}%)` }">
                <div v-for="(item, index) in items" :key="index" class="flex-shrink-0 w-full h-full text-center">
                    <p class="text-lg text-blue-800 font-semibold">{{ item }}</p>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @click="nextItem" class="h-6 w-6 cursor-pointer text-blue-800 hover:text-blue-500 duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const currentIndex = ref(0);

const previousItem = () => {
    if (currentIndex.value === 0) {
        currentIndex.value = items.length - 1;
    } else {
        currentIndex.value--;
    }
};

const nextItem = () => {
    if (currentIndex.value === items.length - 1) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
}

const { items } = defineProps({
    items: {
        type: Array,
        required: true,
    }
})

</script>