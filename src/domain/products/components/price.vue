<script setup lang="ts">
interface ProductCardPriceProps {
	price: number;
	oldPrice?: number;
	level?: number;
}

const props = defineProps<ProductCardPriceProps>();

const { toMoney } = useCurrency();
</script>
<template>
	<div v-if="level && level > 0">
		<span
			v-if="oldPrice"
			class="flex flex-col items-center text-gray-400 -mb-1"
		>
			{{ toMoney(oldPrice) }}
		</span>
		<span class="h2"> {{ toMoney(price) }}</span>
	</div>
	<div v-else class="h-full">
		<span class="font-bold">Нет в наличии</span>
	</div>
</template>
