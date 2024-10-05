<template>
    <div class="py-4 bg-blue-900">
        <div class="flex items-center justify-center gap-2">
            <img :src="Sunny" class="h-6 w-6" />
            <span class="text-blue-300 text-lg">18°</span>
            <span class="text-blue-300 text-lg">{{ selectedCity }}</span>
        </div>
    </div>
</template>
<script setup>

import { computed } from "vue";
import { useStore } from "vuex";
import Sunny from "../assets/sunny.png"

const store = useStore();

const selectedCity = computed(() => store.getters.selectedCity);


</script>