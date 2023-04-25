<script setup lang="ts">
import { useSwiper } from 'swiper/vue'

const swiper = useSwiper()
</script>
<template>
    <button
        class="p-2.5 group pointer-events-auto rounded-full bg-white flex justify-center items-center shadow-normal hover:shadow-normal-hover disabled:bg-gray-600"
        :disabled="swiper.activeIndex === swiper.slides.length - 1"
        @click="swiper.slideNext()"
    >
        <nuxt-icon
            class="rotate-180 transition-colors group-hover:text-primary-blue text-[2.5rem] max-h-10 group-disabled:text-gray-700"
            name="40/arrow"
        />
    </button>
</template>
