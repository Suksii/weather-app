<template>
    <div class="flex items-center justify-evenly py-2 bg-blue-700">
        <h1 class="text-xl md:text-2xl text-blue-100">Weather Channel</h1>
        <input placeholder="Search for city"
         class="rounded-full py-2 px-4 outline-none focus:outline-none bg-blue-50 min-w-[300px] placeholder:text-blue-700 text-blue-800"
         v-model="searchQuery"
         />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const searchQuery = ref("");

watch(searchQuery, (newValue) => {
  console.log('Search query updated:', newValue);
});

</script>