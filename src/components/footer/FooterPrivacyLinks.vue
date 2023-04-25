<script setup lang="ts">
import { APIMenuLinks, APILinkType } from '~~/src/helpers/api.types'

interface FooterPrivacyLinksProps {
    links: APIMenuLinks
}

defineProps<FooterPrivacyLinksProps>()
</script>
<template>
    <div class="w-full h-[1px] bg-white bg-opacity-10"></div>
    <nav class="max-w-screen-2xl w-screen px-4">
        <ul
            class="flex items-center w-full justify-start py-4.5 gap-5 text-white caption-semibold"
        >
            <li v-for="link of links" :key="link.title">
                <nuxt-link
                    v-if="link.link.type === APILinkType.url"
                    :to="link.link.href"
                >
                    {{ link.title }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
