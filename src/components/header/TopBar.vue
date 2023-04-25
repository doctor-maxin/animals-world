<script setup lang="ts">
import TelLink from '~/components/helpers/TelLink.vue'
import { useMainStore } from '~~/src/domain/main/main.store'

const { config } = useMainStore()
</script>
<template>
    <section class="top-bar">
        <nav>
            <ul class="w-full flex items-center justify-start gap-4">
                <li class="menu-item">
                    <nuxt-icon name="32/location" />
                    <span>{{ config.header.city }}</span>
                </li>
                <li class="menu-item">
                    <nuxt-icon name="32/time" />
                    <span>{{ config.header.worktime }}</span>
                </li>
                <li class="menu-item">
                    <nuxt-icon name="32/phone" />
                    <tel-link :tel="config.header.phone"></tel-link>
                </li>
                <li class="w-fit ml-auto place-self-end">
                    <ui-button
                        variant="secondary-small"
                        class="whitespace-nowrap"
                        >Написать нам</ui-button
                    >
                </li>
            </ul>
        </nav>
    </section>
</template>
<style lang="scss">
.top-bar {
    .menu-item {
        display: grid;
        grid-template-columns: 2rem auto;
        align-items: center;
        width: fit-content;
        @apply text-gray-900;
        .nuxt-icon {
            @apply text-primary-blue text-opacity-40;
            font-size: 2rem;
            font-style: normal;
            svg {
                margin-bottom: 0;
            }
        }
    }
}
</style>
