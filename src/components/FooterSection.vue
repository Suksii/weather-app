<template>
    <footer class="text-blue-50 pt-4 pb-2 w-full">
        <div class="max-w-screen-xl mx-auto text-center">
            <p class="text-lg font-semibold">&copy; {{ currentYear }} Weather Channel Montenegro</p>
            <p class="text-sm mt-2">All rights reserved</p>
        </div>
    </footer>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

const updateYear = () => {
    currentYear.value = new Date().getFullYear();
}


onMounted(() => {
    const interval = setInterval(updateYear, 60 * 60 * 1000);

    onUnmounted(() => {
        clearInterval(interval)
    })
})

</script>