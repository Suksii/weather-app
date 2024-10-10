<template>
    <footer class="text-blue-50 pt-4 pb-2 w-full">
        <div class="max-w-screen-xl mx-auto text-center">
            <p class="text-lg font-semibold">&copy; {{ currentYear }} Weather Channel Montenegro</p>
            <p class="text-sm mt-2">All rights reserved</p>
        </div>
    </footer>
</template>

<script setup>

const currentYear = new Date().getFullYear();

</script>