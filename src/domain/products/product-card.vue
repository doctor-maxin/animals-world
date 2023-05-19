<script setup lang="ts">
import { APIProductItem } from "~~/src/helpers/api.types";

interface ProductCardProps {
	item: APIProductItem;
	variant: "catalog" | "default";
}

const props = defineProps<ProductCardProps>();

const productLink = computed(() => {
	return (
		"/catalog/" +
		props.item.link.section_handle +
		"/" +
		props.item.link.handle
	);
});
</script>
<template>
	<article
		class="bg-white rounded-2.5 flex group relative justify-between h-full flex-col product-card"
		:class="{
			'hover:shadow-product hover:rounded-b-none rounded-2.5 border border-[#EEF2FDE5]':
				variant === 'catalog',
		}"
	>
		<div class="flex flex-col gap-2 p-5 h-full">
			<div class="relative">
				<ProductCardTags :tags="item.tags" />
				<nuxt-link :to="productLink">
					<ProductCardImage :image="item.image" />
				</nuxt-link>
				<ProductCardFavoriteBtn :id="item.id" />
			</div>
			<div class="mb-1 flex justify-between items-center">
				<ProductCardAvailable :level="item.available_lvl" />
				<productCardRate v-if="item.rating" :rate="item.rating" />
			</div>
			<div class="label-regular text-base mb-1 line-clamp-3">
				<nuxt-link :to="productLink">
					{{ item.title }}
				</nuxt-link>
			</div>
			<div class="flex justify-between items-center my-auto">
				<ProductCardPrice
					:price="item.price"
					:level="item.available_lvl"
					:old-price="item.price_old"
				/>
				<UiButton
					v-if="item.available_lvl && item.available_lvl > 0"
					class="max-h-[2.75rem] max-w-[4.125] flex items-center"
					variant="primary"
				>
					<nuxt-icon name="32/bag" class="text-[2rem]"
				/></UiButton>
			</div>
		</div>
		<ProductCardQuickBtn
			class="hidden"
			:class="{
				'group-hover:block absolute shadow-product rounded-b-2.5 bg-white w-[calc(100%_+_2px)] -left-px top-full z-20 border border-[#EEF2FDE5] border-t-0':
					variant === 'catalog',
			}"
			:id="item.id"
		/>
	</article>
</template>
