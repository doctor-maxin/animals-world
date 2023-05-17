<script setup lang="ts">
import { useCatalogStore } from '../catalog.store';

interface CategoryCatalog {
    id: number;
    handle: string;
}
const props = defineProps<CategoryCatalog>()
const handle = Array.isArray(props.handle) ? props.handle.join('/') : props.handle

const catalogStore = useCatalogStore()

const {data} = await useLazyAsyncData(() => catalogStore.getProducts({section_handle: handle}))

console.log('G', data.value)
</script>
<template>
<div>
    <CategoryFilters :id="id" />
    <div>
        <CategorySorting />
        <CategoryProducts />
        <Pagination />
    </div>
</div>
</template>