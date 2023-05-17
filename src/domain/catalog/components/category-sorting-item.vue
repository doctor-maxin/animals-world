<script setup lang="ts">
import { Sort, SortDirect } from "~~/src/helpers/sorting.types";

interface CategorySortingItem {
	type: Sort;
	selected: Sort;
	direct: SortDirect;
}
interface CategorySortingItemEmits {
	(event: "select", payload: Sort): void;
}

defineProps<CategorySortingItem>();
defineEmits<CategorySortingItemEmits>();
</script>

<template>
	<div>
		<button
			class="py-1.5 px-3 flex items-center"
			:class="{
				'bg-secondary-blue px-5 gap-1 rounded-2.5': selected === type,
			}"
			@click="$emit('select', type)"
			type="button"
		>
			<span>
				{{
					type === Sort.PRICE
						? "По цене"
						: type === Sort.POPULAR
						? "По популярности"
						: "По рейтингу"
				}}
			</span>
			<nuxt-icon
				v-if="selected === type"
				class="text-xl -mr-2 mb-0 svg-icon"
				:class="{
					'-rotate-90': direct === SortDirect.ASC,
					'rotate-90': direct === SortDirect.DESC,
				}"
				name="20/arrow"
			/>
		</button>
	</div>
</template>
<style>
.nuxt-icon svg {
	margin-bottom: 0 !important;
}
</style>
