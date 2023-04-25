<script setup lang="ts">
import { useBannerStore } from './banner.store'
import BannerPrevBtn from './controllers/banner-prev.vue'
import BannerNextBtn from './controllers/banner-next.vue'
import BannerPrimarySlide from './slides/banner-primary.slide.vue'

interface BannerProps {
    variant: 'primary'
    handle: string
}

const { handle } = defineProps<BannerProps>()
const bannerStore = useBannerStore()
const { data: list } = useAsyncData('banner', () =>
    bannerStore.getBanner(handle)
)
</script>

<template>
    <div class="relative z-0 group/slider">
        <ClientOnly>
            <Swiper
                :slides-per-view="'auto'"
                centered-slides
                :space-between="40"
                :loop="list ? list.length >= 6 : false"
            >
                <template v-for="slide of list" :key="slide.id">
                    <SwiperSlide
                        class="banner-slide"
                        :title="slide.title"
                        v-if="slide.image"
                    >
                        <BannerPrimarySlide :slide="slide" />
                    </SwiperSlide>
                </template>
                <div
                    class="left-1/2 opacity-0 transition-opacity group-hover/slider:opacity-100 flex z-10 px-2 pointer-events-none -translate-x-1/2 w-full h-full top-0 max-w-screen-2xl items-center justify-between absolute"
                >
                    <BannerPrevBtn />
                    <BannerNextBtn />
                </div>
            </Swiper>
        </ClientOnly>
    </div>
</template>
<style lang="scss">
.banner-slide {
    @apply w-screen relative z-0 max-w-screen-2xl h-95 rounded-3.5 overflow-hidden;

    &__image {
        @apply object-cover object-center w-full h-full transition-opacity;
        &.not-active {
            opacity: 0.4;
        }
    }
}
</style>
