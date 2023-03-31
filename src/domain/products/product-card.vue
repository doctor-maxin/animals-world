<script setup lang="ts">
import { APIProductItem } from '~~/src/helpers/api.types'

interface ProductCardProps {
    item: APIProductItem
}

const props = defineProps<ProductCardProps>()

const productLink = computed(() => {
    return '/' + props.item.link.section_handle + '/' + props.item.link.handle
})
</script>
<template>
    <article class="bg-white rounded-2.5 flex justify-between h-full flex-col">
        <div class="flex flex-col gap-2 p-5">
            <div class="relative">
                <ProductCardTags :tags="item.tags" />
                <nuxt-link :to="productLink">
                    <ProductCardImage :image="item.image" />
                </nuxt-link>
                <ProductCardFavoriteBtn :id="item.id" />
            </div>
            <div class="mb-1 flex justify-between items-center">
                <ProductCardAvailable :level="item.available_lvl" />
                <productCardRate :rate="item.rating" />
            </div>
            <div class="label-regular text-base mb-1 line-clamp-3">
                <nuxt-link :to="productLink">
                    {{ item.title }}
                </nuxt-link>
            </div>
            <div class="flex justify-between items-center">
                <ProductCardPrice
                    :price="item.price"
                    :old-price="item.price_old"
                />
                <UiButton
                    class="max-h-[2.75rem] max-w-[4.125] flex items-center"
                    variant="primary"
                >
                    <nuxt-icon name="32/bag" class="text-[2rem]"
                /></UiButton>
            </div>
        </div>
        <ProductCardQuickBtn :id="item.id" />
    </article>
</template>
