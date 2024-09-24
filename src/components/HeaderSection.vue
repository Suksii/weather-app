<template>
    <div class="flex items-center justify-evenly py-2 bg-blue-700">
        <h1 class="text-xl md:text-2xl text-blue-100">Weather Channel</h1>
        <div class="relative">
            <input placeholder="Search for city"
            class="rounded-full py-2 px-4 outline-none focus:outline-none bg-blue-50 min-w-[300px] placeholder:text-blue-700 text-blue-800"
            v-model="searchQuery"
            @input="handleSearch"
            />
            <ul v-if="searchResults.length > 0" class="absolute w-full bg-blue-50 mt-2 rounded-sm z-40">
                <li v-for="city in searchResults" :key="city" class="hover:bg-blue-700 hover:text-blue-50 duration-200 py-1 px-3 cursor-pointer">
                    {{city}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref("");
const searchResults = ref([]);

const cityList = ['Podgorica', 'Cetinje', 'Pljevlja', 'Niksic', 'Ulcinj', 'Bar', 'Berane']

const handleSearch = () => {
    if(searchQuery.value.trim() === '') {
        searchResults.value = [];
    } else {
        searchResults.value = cityList.filter(city =>
            city.toLocaleLowerCase().includes(searchQuery.value.trim().toLocaleLowerCase())
        )
    }
}

</script>