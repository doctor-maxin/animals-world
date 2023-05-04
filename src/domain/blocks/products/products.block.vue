<script setup lang="ts">
import { APIProductItem } from '~~/src/helpers/api.types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ProductCard from '#domain/products/product-card.vue'
import bannerNext from '../../banners/controllers/banner-next.vue'
import bannerPrev from '../../banners/controllers/banner-prev.vue'

interface ProductsBlockProps {
    list: APIProductItem[]
    title: string
}

const { isMobile } = useDeviceWidth()

defineProps<ProductsBlockProps>()
</script>
<template>
    <section
        class="bg-gray-500 py-7 px-4 lg:px-15 lg:py-14.5 rounded-xl lg:rounded-3.5"
    >
        <h2 class="h1 mb-4 lg:mb-12">{{ title }}</h2>
        <div class="z-0 group/slider">
            <Swiper
                :slides-per-view="isMobile ? 'auto' : 6"
                :space-between="isMobile ? 8 : 28"
            >
                <SwiperSlide v-for="product of list" :key="product.id">
                    <ProductCard :item="product" />
                </SwiperSlide>
                <div
                    class="opacity-0 w-full transition-opacity group-hover/slider:opacity-100 flex z-10 pointer-events-none h-full top-0 items-center justify-between absolute"
                >
                    <bannerPrev />
                    <bannerNext />
                </div>
            </Swiper>
        </div>
    </section>
</template>
