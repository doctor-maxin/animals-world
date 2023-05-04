<script setup lang="ts">
import { APIVendorItem } from '~~/src/helpers/api.types'

interface VendorItemImageProps {
    image: APIVendorItem['image']
}

defineProps<VendorItemImageProps>()
</script>
<template>
    <div
        v-if="image"
        class="rounded-2.5 overflow-hidden border border-secondary-lightBlue aspect-[350/232] max-w-[21.875rem]"
    >
        <img
            class="w-full h-full object-cover"
            :src="image.src.orig"
            :alt="image.alt"
            :title="image.title"
        />
    </div>
</template>
