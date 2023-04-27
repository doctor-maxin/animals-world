<script setup lang="ts">
import { APIImage } from '~~/src/helpers/api.types'

interface CardProps {
    item: CardItem
}
interface CardItem {
    date: string
    link: string
    title: string
    description: string
    image?: APIImage
}

defineProps<CardProps>()
</script>
<template>
    <article
        class="group bg-gray-500 rounded-xl lg:rounded-3.5 hover:pb-6 transition-all"
    >
        <nuxt-link :to="item.link">
            <div class="p-5 lg:p-6">
                <time class="caption-bold text-gray-700 block mb-4 lg:mb-9">{{
                    item.date
                }}</time>
                <div class="h3 mb-2 lg:mb-3">{{ item.title }}</div>
                <p class="line-clamp-2">{{ item.description }}</p>
            </div>
            <div
                v-if="item.image"
                class="group-hover:mx-6 rounded-xl lg:rounded-3.5 overflow-hidden transition-all"
            >
                <img
                    :src="item.image.src.orig"
                    :alt="item.image.alt"
                    class="w-full aspect-[30/19] object-cover object-center duration-300"
                />
            </div>
        </nuxt-link>
    </article>
</template>
