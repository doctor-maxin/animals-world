<script setup lang="ts">
import { APICatalogItem, APILinkType } from '~~/src/helpers/api.types'
import CategoryBlock from './category.block.vue'
interface BlockCategoriesProps {
    list: Omit<APICatalogItem, 'children' | 'seo' | 'seo_block'>[]
}

defineProps<BlockCategoriesProps>()
</script>
<template>
    <div class="flex gap-5 max-w-screen-2xl mx-auto w-full overflow-x-auto">
        <template v-for="item of list" :key="item.id">
            <category-block
                v-if="item.link.type === APILinkType.catalog_section"
                :item="item"
            />
        </template>
    </div>
</template>
