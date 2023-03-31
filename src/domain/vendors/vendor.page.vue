<script setup lang="ts">
import { useVendorsStore } from './vendors.store'
import PopularVendors from './components/popular-vendors.vue'
import VendorSections from './components/vendor-sections.vue'

const vendorsStore = useVendorsStore()
const { data } = await useAsyncData('popular-vendors', () =>
    vendorsStore.getPopularList()
)
const { data: sections } = await useAsyncData('vendor-sections', () =>
    vendorsStore.getSectionList()
)

watch(
    data,
    () => {
        if (data.value) {
            vendorsStore.setList(data.value)
        }
    },
    {
        deep: true,
        immediate: true
    }
)

useHead({
    title: 'Бренды'
})
</script>
<template>
    <div class="py-12 min-h-screen max-w-screen-2xl mx-auto">
        <h1 class="h1 mb-13">Популярные бренды</h1>
        <Suspense>
            <div class="flex flex-col">
                <PopularVendors />
                <h2 class="h1 mt-20 mb-10">Все бренды</h2>
                <VendorSections v-if="sections" :sections="sections" />
            </div>
            <template #fallback>
                <UiSpinner />
            </template>
        </Suspense>
    </div>
</template>
