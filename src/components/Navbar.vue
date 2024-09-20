<template>
    <header class="sticky top-0 shadow-xl">
        <div class="flex items-center justify-center">
            <nav class="flex flex-col md:flex-row justify-center items-center w-full">
                <RouterLink v-for="item in navMenu" :to="item.link" :key="item.id"
                    class="p-4 min-w-32 w-full md:w-32 hover:shadow-md hover:shadow-blue-800 text-center duration-300 text-lg text-blue-700 font-semibold">
                    {{ item.name }}
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const navMenu = [
    {
        id: 1,
        name: 'Today',
        link: '/today'
    },
    {
        id: 2,
        name: 'Hourly',
        link: '/hourly'
    },
    {
        id: 3,
        name: 'Daily',
        link: '/daily'
    },
    {
        id: 4,
        name: 'Weekly',
        link: '/weekly'
    },
    {
        id: 5,
        name: 'Montly',
        link: '/monthly'
    }
]
</script>