<script setup lang="ts">
interface ProductCardPriceProps {
    price: number
    oldPrice?: number
}

const props = defineProps<ProductCardPriceProps>()

const { toMoney } = useCurrency()
</script>
<template>
    <div>
        <span
            v-if="oldPrice"
            class="flex flex-col items-center text-gray-400 -mb-1"
        >
            {{ toMoney(oldPrice) }}
        </span>
        <span class="h2"> {{ toMoney(price) }}</span>
    </div>
</template>
