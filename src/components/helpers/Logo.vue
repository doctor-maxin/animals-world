<script setup lang="ts">
import { useMainStore } from '~~/src/domain/main/main.store'

const { config } = useMainStore()
</script>
<template>
    <nuxt-link to="/">
        <img
            :src="config.header.logo"
            alt="Логотип сайта"
            class="w-12 lg:w-[8.25rem] h-12 lg:h-[8.25rem]"
        />
    </nuxt-link>
</template>
