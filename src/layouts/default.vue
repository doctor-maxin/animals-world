<script lang="ts" setup>
import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'
import { useMainStore } from '../domain/main/main.store'
import { useCatalogStore } from '../domain/catalog/catalog.store'

const mainStore = useMainStore()
const catalogStore = useCatalogStore()
const { data } = useAsyncData('main-config', () =>
    mainStore.getConfig('common')
)
if (data?.value) mainStore.setConfig(data.value)

const { data: categories } = useAsyncData('main-catalog', () =>
    catalogStore.getCategories()
)
if (categories?.value) {
    catalogStore.setCatalogInfo(categories.value)
    catalogStore.setCategories(categories.value.children)
}
</script>
<template>
    <div>
        <!-- <TheHeader /> -->
        <slot />
        <Suspense>
            <!-- <TheFooter /> -->
            <template #fallback> Ошибка при загрузке </template>
        </Suspense>
    </div>
</template>
