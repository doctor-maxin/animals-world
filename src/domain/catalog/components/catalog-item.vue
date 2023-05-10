<script setup lang="ts">
import { APICatalogItem, APILinkType } from '~~/src/helpers/api.types'

interface CatalogItemProps {
    list: Omit<APICatalogItem, 'children' | 'seo' | 'seo_block'>[]
}

defineProps<CatalogItemProps>()
</script>
<template>
    <div class="grid grid-cols-3 lg:grid-cols-6 gap-3.5 lg:gap-10">
        <ClientOnly>
            <template v-for="item of list" :key="item.id">
                <div class="">
                    <BlocksCategoriesCategoryBlock
                        v-if="item.link.type === APILinkType.catalog_section"
                        :item="item"
                    />
                </div>
            </template>
        </ClientOnly>
    </div>
</template>
