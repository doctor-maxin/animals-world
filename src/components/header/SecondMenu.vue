<script setup lang="ts">
import { useMainStore } from '~~/src/domain/main/main.store'
import { APILinkType } from '~/helpers/api.types'
const mainStore = useMainStore()

const { data: links } = await useAsyncData('topMenu', () =>
    mainStore.getMenu('top')
)
</script>
<template>
    <nav class="hidden lg:block bg-secondary-blue">
        <ul class="container flex gap-8 justify-start py-3.5">
            <template v-for="link of links">
                <li
                    v-if="link.link.type === APILinkType.url"
                    class="font-semibold hover:text-primary-blue transition-colors"
                >
                    <NuxtLink :to="link.link.href">
                        <span>{{ link.title }}</span>
                    </NuxtLink>
                </li>
            </template>
        </ul>
    </nav>
</template>
