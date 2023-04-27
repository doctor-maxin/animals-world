<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '~~/src/domain/main/main.store'

const { config } = storeToRefs(useMainStore())
</script>
<template>
    <div class="flex items-center gap-5">
        <img
            class="w-full max-w-[7.25rem]"
            :src="config.footer.logo"
            alt="Footer logo"
        />
        <span class="text-white caption-medium hidden lg:block">{{
            config.footer.copyright
        }}</span>
    </div>
</template>
