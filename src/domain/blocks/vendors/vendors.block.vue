<script setup lang="ts">
import SectionLink from '~~/src/components/ui/SectionLink.vue'
import VendorItem from './vendor-item.vue'
import bannerPrev from '../../banners/controllers/banner-prev.vue'
import bannerNext from '../../banners/controllers/banner-next.vue'
import { Controller, Swiper as SwiperClass } from 'swiper'

interface VendorsBlockProps {
    list: any[]
}

const { isMobile } = useDeviceWidth()
const firstSwiper: Ref<SwiperClass | null> = ref(null)

const setFirstSwiper = (swiper: SwiperClass) => {
    firstSwiper.value = swiper
}
defineProps<VendorsBlockProps>()
</script>
<template>
    <div
        class="container bg-primary-yellow rounded-xl lg:rounded-3.5 py-7 px-4 lg:px-[3.75rem] lg:py-[3.625rem]"
    >
        <div class="pb-0 lg:pb-0">
            <SectionLink class="mb-5 lg:mb-12" title="Бренды" link="/vendors" />
        </div>
        <ClientOnly>
            <div class="z-0 group/slider">
                <Swiper
                    @swiper="setFirstSwiper"
                    :slides-per-view="isMobile ? 'auto' : 6"
                    :space-between="isMobile ? 8 : 28"
                >
                    <SwiperSlide v-for="item in list" class="" :key="item.id">
                        <VendorItem :item="item" />
                    </SwiperSlide>
                </Swiper>
                <swiper
                    :modules="[Controller]"
                    :controller="{ control: firstSwiper }"
                >
                    <div
                        class="opacity-0 w-full transition-opacity group-hover/slider:opacity-100 flex z-10 pointer-events-none h-full top-0 items-center justify-between absolute"
                    >
                        <bannerPrev />
                        <bannerNext />
                    </div>
                </swiper>
            </div>
        </ClientOnly>
    </div>
</template>
