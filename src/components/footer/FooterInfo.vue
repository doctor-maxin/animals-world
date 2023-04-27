<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '~~/src/domain/main/main.store'
import TelLink from '~/components/helpers/TelLink.vue'

const mainStore = useMainStore()
const { config } = storeToRefs(mainStore)
</script>
<template>
    <div class="flex flex-col items-end whitespace-nowrap lg:whitespace-normal">
        <div class="flex items-center gap-0.5 mb-1">
            <nuxt-icon
                name="32/phone"
                class="text-[2rem] text-white text-opacity-70"
            />
            <tel-link
                class="text-white h2 !font-bold"
                :tel="config.footer.phone"
            />
        </div>
        <span class="mb-4 block text-white caption-medium">
            {{ config.footer.worktime }}</span
        >
        <ui-button variant="secondary-small">Обратный звонок</ui-button>
    </div>
</template>
