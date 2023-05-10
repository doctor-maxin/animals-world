<script lang="ts" setup>
import { useMainStore } from '../domain/main/main.store'
import { useCatalogStore } from '../domain/catalog/catalog.store'
import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'
import ThrowError from '~/components/common/ThrowError.vue'

const mainStore = useMainStore()
const catalogStore = useCatalogStore()
const { data } = await useAsyncData('main-config', () =>
    mainStore.getConfig('common')
)
if (data?.value) {
    mainStore.setConfig(data.value)
}
const { data: categories } = await useAsyncData('main-catalog', () =>
    catalogStore.getCategories()
)
if (categories?.value) {
    catalogStore.setCatalogInfo(categories.value)
    catalogStore.setCategories(categories.value.children)
    if (categories.value.seo_block)
        catalogStore.setSeoBlock(categories.value.seo_block)
}
</script>
<template>
    <div>
        <Suspense>
            <template #default>
                <TheHeader />
            </template>
            <template #fallback>
                <TheHeader />
            </template>
        </Suspense>
        <slot />
        <Suspense>
            <template #default>
                <TheFooter />
            </template>
            <template #fallback>
                <TheFooter />
            </template>
        </Suspense>
        <NuxtErrorBoundary>
            <ThrowError />
        </NuxtErrorBoundary>
    </div>
</template>
