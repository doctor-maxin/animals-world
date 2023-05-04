<script setup lang="ts">
import { APIImage } from '~~/src/helpers/api.types'

interface ProductCardImage {
    image: APIImage
}

defineProps<ProductCardImage>()
</script>
<template>
    <div class="rounded-xx overflow-hidden aspect-square w-full">
        <img
            :src="image.src.orig"
            :alt="image.alt"
            :title="image.title"
            class="w-full h-full object-cover"
        />
    </div>
</template>
