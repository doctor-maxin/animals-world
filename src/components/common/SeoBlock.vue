<script setup lang="ts">
import { APISeoBlock } from '~~/src/helpers/api.types'

interface SeoBlockProps {
    block: APISeoBlock
}
defineProps<SeoBlockProps>()
</script>
<template>
    <div>
        <div class="flex lg:gap-10">
            <div v-if="block.image" class="hidden lg:block">
                <img
                    :src="block.image.src.orig"
                    :title="block.image.title"
                    :alt="block.image.alt"
                />
            </div>
            <BlocksShowMoreWrapper :max-height-content="240" class="">
                <template>
                    <div>
                        <h4>{{ block.title }}</h4>
                        <p>{{ block.text }}</p>
                    </div>
                </template>
                <template #button>
                    <button>
                        <span>Развернуть</span>
                        <nuxt-icon name="20/arrow" />
                    </button>
                </template>
            </BlocksShowMoreWrapper>
        </div>
    </div>
</template>
