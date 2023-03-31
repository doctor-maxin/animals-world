<script setup lang="ts">
interface ProductCardRateProps {
    rate: number
}

const props = defineProps<ProductCardRateProps>()
</script>
<template>
    <div v-if="props.rate" class="flex gap-1 items-center">
        <nuxt-icon filled class="text-primary-yellow text-xl" name="20/star" />
        <span class="text-gray-700 caption-bold">{{ rate }}</span>
    </div>
</template>
