<script setup lang="ts">
import { APISeoBlock } from '~~/src/helpers/api.types'

interface SeoBlockProps {
    block: APISeoBlock
}
defineProps<SeoBlockProps>()
</script>
<template>
    <div>
        <div class="flex lg:gap-10 bg-gray-500 px-4 py-5 lg:py-12 lg:px-13 rounded-xl lg:rounded-3.5">
            <div v-if="block.image" class="hidden lg:block w-[12.75rem] min-w-[12.75rem] aspect-square">
                <img
                    class="max-w-full max-h-full"
                    :src="block.image.src.orig"
                    :title="block.image.title"
                    :alt="block.image.alt"
                />
            </div>
            <BlocksShowMoreWrapper :max-height-content="240">
                <template #default>
                    <div>
                        <h4 class="h1 mb-5">{{ block.title }}</h4>
                        <div v-html="block.text" />
                    </div>
                </template>
                <template #button v-slot="{ open }">
                    <button @click="$emit('click')">
                        <span>Развернуть</span>
                        <nuxt-icon name="20/arrow" />
                    </button>
                </template>
            </BlocksShowMoreWrapper>
        </div>
    </div>
</template>
