<script setup lang="ts">
interface SectionLinkProps {
    title: string
    link: string
}

defineProps<SectionLinkProps>()
</script>
<template>
    <nuxt-link :to="link" class="h1 flex items-center gap-1 group">
        <span>{{ title }}</span>
        <nuxt-icon
            name="40/cool-arrow"
            class="group-hover:translate-x-2 transition-transform"
        />
    </nuxt-link>
</template>
