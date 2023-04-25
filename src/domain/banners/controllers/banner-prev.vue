<script setup lang="ts">
const swiper = useSwiper()
</script>
<template>
    <button
        class="p-2.5 rounded-full pointer-events-auto group bg-white flex justify-center items-center shadow-normal hover:shadow-normal-hover disabled:bg-gray-600"
        :disabled="swiper.activeIndex === 0"
        @click="swiper.slidePrev()"
    >
        <NuxtIcon
            class="group-hover:text-primary-blue max-h-10 transition-colors text-[2.5rem] group-disabled:text-gray-700"
            name="40/arrow"
        />
    </button>
</template>
