<script setup lang="ts">
import { APIBannerItem } from '~/helpers/api.types'

interface BannerPrimarySlide {
    slide: APIBannerItem
}

const { slide } = defineProps<BannerPrimarySlide>()
const swiperSlide = useSwiperSlide()
console.log(swiperSlide.value)
</script>
<template>
    <img
        class="banner-slide__image"
        :class="{ 'not-active': !swiperSlide.isActive }"
        :alt="slide.image.alt"
        :title="slide.image.title"
        :src="slide.image.src.orig"
    />
</template>
