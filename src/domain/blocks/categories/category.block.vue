<script setup lang="ts">
import { APICatalogItem, APILinkType } from '~~/src/helpers/api.types'

interface CategoryBlockProps {
    item: Omit<APICatalogItem, 'children' | 'seo' | 'seo_block'>
}

defineProps<CategoryBlockProps>()
</script>
<template>
    <nuxt-link
        v-if="item.link.type === APILinkType.catalog_section"
        :to="`/catalog/${item.link.handle}`"
        class="py-6 block px-7 overflow-hidden category-item relative bg-gray-500 rounded-3.5 max-w-[12.5] max-h-[12.5] w-52 aspect-square"
    >
        <span class="font-bold relative z-10">{{ item.title }}</span>
        <img
            v-if="item.image"
            class="w-full absolute right-0 bottom-0"
            :alt="item.image.alt"
            :title="item.image.title"
            :src="item.image.src?.orig"
        />
    </nuxt-link>
</template>
<style lang="scss">
.category-item {
    &::before {
        @apply bg-primary-yellow;
        content: '';
        position: absolute;
        width: 0;
        height: 0%;
        bottom: 0%;
        opacity: 0.5;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.175, 0.685, 0.32, 1.275);
    }
    &:hover::before {
        width: 200%;
        height: 200%;
        bottom: -50%;
        opacity: 1;
    }
}
</style>
