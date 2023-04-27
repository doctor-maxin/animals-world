<script setup lang="ts">
import { APINewsItem } from '~~/src/helpers/api.types'
import SectionLink from '@/components/ui/SectionLink.vue'
import Card from '@/components/ui/Card.vue'
import bannerPrev from '../../banners/controllers/banner-prev.vue'
import bannerNext from '../../banners/controllers/banner-next.vue'

interface NewsBlockProps {
    list: APINewsItem[]
    title: string
}
const props = defineProps<NewsBlockProps>()
const { isMobile } = useDeviceWidth()

const tranformedList = computed(() =>
    props.list.map((item) => ({
        id: item.id,
        date: new Date(item.date).toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        title: item.title,
        description: item.text,
        image: item.image,
        link: `${item.link.type}/${item.link.handle}`
    }))
)
</script>
<template>
    <div class="container pl-4 lg:pl-0">
        <SectionLink class="mb-5 lg:mb-12" :title="title" link="/news" />
        <div class="relative z-0 group/slider">
            <Swiper
                :slides-per-view="isMobile ? 'auto' : 3"
                :space-between="isMobile ? 16 : 40"
            >
                <SwiperSlide
                    v-for="item in tranformedList"
                    class="max-w-[18.75rem] lg:max-w-[30rem]"
                    :key="item.id"
                >
                    <Card :item="item" type="news" />
                </SwiperSlide>
                <div
                    class="left-1/2 opacity-0 transition-opacity group-hover/slider:opacity-100 flex z-10 px-2 pointer-events-none -translate-x-1/2 w-full h-full top-0 max-w-screen-2xl items-center justify-between absolute"
                >
                    <bannerPrev />
                    <bannerNext />
                </div>
            </Swiper>
        </div>
    </div>
</template>
