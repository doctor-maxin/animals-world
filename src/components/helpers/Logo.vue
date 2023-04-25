<script setup lang="ts">
import { useMainStore } from '~~/src/domain/main/main.store'

const { config } = useMainStore()
</script>
<template>
    <img
        :src="config.header.logo"
        alt="Логотип сайта"
        class="w-[8.25rem] h-[8.25rem]"
    />
</template>
