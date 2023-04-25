<script setup lang="ts">
import { useMainStore } from './main.store'
import Banner from '~/domain/banners/banner.vue'
import categoriesBlock from '../blocks/categories/categories.block.vue'
import { useCatalogStore } from '../catalog/catalog.store'

const mainStore = useMainStore()
const catalogStore = useCatalogStore()
</script>
<template>
    <main class="py-12 flex flex-col gap-20 min-h-screen">
        <banner variant="primary" handle="main" />
        <categories-block :list="catalogStore.getMainCategories" />
    </main>
</template>
