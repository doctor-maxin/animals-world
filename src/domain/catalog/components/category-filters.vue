<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCatalogStore } from "../catalog.store";

interface CategoryCatalog {
	id: number;
	sectionHandle: string;
}

const catalogStore = useCatalogStore();
const { filters } = storeToRefs(catalogStore);

const { data } = await useAsyncData("filters", () =>
	catalogStore.getFilters(props.sectionHandle)
);

const props = defineProps<CategoryCatalog>();
</script>
<template>
	<div v-if="data">
		<RangeFilter
			title="'Цена, ₽'"
			v-model="filters['price']"
			:min="data.price.min"
			:max="data.price.max"
		/>
	</div>
</template>
