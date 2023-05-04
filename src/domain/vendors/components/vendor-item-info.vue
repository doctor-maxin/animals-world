<script setup lang="ts">
interface VendorItemInfoProps {
    title: string
    description: string
}

defineProps<VendorItemInfoProps>()
</script>
<template>
    <div>
        <h1 class="h1">{{ title }}</h1>
        <p class="m-0 text-xl">{{ description }}</p>
    </div>
</template>
