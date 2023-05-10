<script setup lang="ts">
import { useCatalogStore } from './catalog.store'
const { params } = useRoute()

const catalogStore = useCatalogStore()

const { data } = useAsyncData('catalog', () =>
    catalogStore.getCategories(params.handle as string)
)
</script>
<template>
    <div
        class="min-h-available-screen px-4 lg:px-0 max-w-screen-2xl py-13 items-center mx-auto w-full"
    >
        <Suspense>
            <div v-if="data" class="flex flex-col gap-6 lg:gap-13">
                <h1 class="w-full">{{ data.title }}</h1>
                <CatalogItem
                    v-if="data.children?.length"
                    :list="data.children"
                />
                <SeoBlock v-if="data.seo_block" :seo-block="data.seo_block" />
            </div>
        </Suspense>
    </div>
</template>
