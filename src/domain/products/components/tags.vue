<script setup lang="ts">
import { APITag } from '~~/src/helpers/api.types'

interface ProductCardTags {
    tags: APITag[]
}

defineProps<ProductCardTags>()
</script>
<template>
    <div class="absolute left-1 top-1.5 flex max-w-[70%] flex-wrap gap-2.5">
        <span
            v-for="tag of tags"
            class="px-2 text-white py-1 rounded-lg bg-additional-blue"
            >{{ tag.title }}</span
        >
    </div>
</template>
