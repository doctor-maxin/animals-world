<script setup lang="ts">
import { APISeoBlock } from '~~/src/helpers/api.types'

interface SeoBlockProps {
    block: APISeoBlock
}
defineProps<SeoBlockProps>()
</script>
<template>
    <div v-if="block.text || block.title || block">
        <div class="flex lg:gap-10 bg-gray-500 px-4 py-5 lg:py-12 lg:px-13 rounded-xl lg:rounded-3.5">
            <div v-if="block.image" class="hidden lg:block w-[12.75rem] min-w-[12.75rem] aspect-square">
                <img
                    class="max-w-full max-h-full"
                    :src="block.image.src.orig"
                    :title="block.image.title"
                    :alt="block.image.alt"
                />
            </div>
            <BlocksShowMoreWrapper :max-height-content="180" >
                <template #default>
                    <div>
                        <h4 v-if="block.title" class="h1 mb-5">{{ block.title }}</h4>
                        <div v-html="block.text" />
                    </div>
                </template>
                <template #button="{open, click}">
                    <button @click="click" class="text-primary-blue flex gap-2 items-center">
                        <span>{{open ? 'Свернуть' : 'Развернуть'}}</span>
                        <nuxt-icon class="text-black text-xl "  
                        :class="[open ? '-rotate-90' : 'rotate-90' ]" name="20/arrow" />
                    </button>
                </template>
            </BlocksShowMoreWrapper>
        </div>
    </div>
</template>
