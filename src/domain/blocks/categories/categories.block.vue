<script setup lang="ts">
import { APICatalogItem, APILinkType } from '~~/src/helpers/api.types'
import CategoryBlock from './category.block.vue'
import { SwiperSlide, Swiper } from 'swiper/vue'
interface BlockCategoriesProps {
    list: Omit<APICatalogItem, 'children' | 'seo' | 'seo_block'>[]
}

const { isMobile } = useDeviceWidth()

defineProps<BlockCategoriesProps>()
</script>
<template>
    <Swiper
        :slides-per-view="'auto'"
        :space-between="isMobile ? 8 : 20"
        class="flex !pl-4 lg:!pl-0 gap-5 xl:max-w-screen-2xl mx-auto w-full overflow-x-auto max-w-full"
    >
        <template v-for="item of list" :key="item.id">
            <SwiperSlide class="max-w-[12.5rem] max-h-[12.5rem] w-52">
                <category-block
                    v-if="item.link.type === APILinkType.catalog_section"
                    :item="item"
                />
            </SwiperSlide>
        </template>
    </Swiper>
</template>
