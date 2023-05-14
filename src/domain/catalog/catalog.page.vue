<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCatalogStore } from './catalog.store'

const catalogStore = useCatalogStore()
const { getMainCategories, mainSeoBlock, title } = storeToRefs(catalogStore)

console.log('HELLLO')
</script>
<template>
    <div
        class="min-h-available-screen px-4 lg:px-0 max-w-screen-2xl py-13 items-center mx-auto w-full"
    >
        <div class="flex flex-col gap-6 lg:gap-13">
            <h1 class="w-full">{{ title }}</h1>
            <CatalogItem v-if="getMainCategories" :list="getMainCategories" />
            <CommonSeoBlock v-if="mainSeoBlock" :block="mainSeoBlock" />
        </div>
    </div>
</template>
