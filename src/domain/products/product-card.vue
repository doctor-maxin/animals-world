<script setup lang="ts">
import { APIProductItem } from '~~/src/helpers/api.types'

interface ProductCardProps {
    item: APIProductItem
}

defineProps<ProductCardProps>()
</script>
<template>
    <div>
        <div class="relative">
            <ProductCardTags :tags="item.tags" />
            <ProductCardImage :image="item.image" />
            <ProductCardFavoriteBtn :id="item.id" />
        </div>
        <div>
            <ProductCardAvailable :level="item.available_lvl" />
            <productCardRate :rate="item.rating" />
        </div>
        <div>
            {{ item.title }}
        </div>
        <div>
            <ProductCardPrice :price="item.price" :old-price="item.price_old" />
            <UiButton variant="primary"></UiButton>
        </div>
        <ProductCardQuickBtn :id="item.id" />
    </div>
</template>
