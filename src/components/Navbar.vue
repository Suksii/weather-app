<template>
    <header class="sticky top-0 shadow-xl">
        <div class="flex justify-end md:hidden p-4">
            <svg v-if="!isMenuOpen" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="size-8 cursor-pointer text-blue-800">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-if="isMenuOpen" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="size-8 cursor-pointer text-blue-800">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="flex items-center justify-center">
            <nav v-if="isMenuOpen" class="flex flex-col md:flex-row justify-center items-center w-full">
                <RouterLink v-for="item in navMenu" :to="`${item.link}/${selectedCity}`" :key="item.id" @click="toggleMenu"
                    class="p-4 min-w-32 w-full md:w-32 hover:shadow-md hover:shadow-blue-800 text-center duration-300 text-lg text-blue-700 font-semibold">
                    {{ item.name }}
                </RouterLink>
            </nav>
            <nav class="hidden md:flex flex-row justify-center items-center w-full">
                <RouterLink v-for="item in navMenu" :to="`${item.link}/${selectedCity}`" :key="item.id"
                    class="p-4 min-w-32 w-full md:w-32 hover:shadow-md hover:shadow-blue-800 text-center duration-300 text-lg text-blue-700 font-semibold">
                    {{ item.name }}
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { comma } from 'postcss/lib/list';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const isMenuOpen = ref(false);
const store = useStore();

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const selectedCity = computed(() => store.getters.selectedCity);

const navMenu = [
    { id: 1, name: 'Today', link: '/today' },
    { id: 2, name: 'Hourly', link: '/hourly' },
    { id: 3, name: 'Montly', link: '/monthly' }
]
</script>