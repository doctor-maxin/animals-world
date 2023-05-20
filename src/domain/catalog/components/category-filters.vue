<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCatalogStore } from "../catalog.store";
import RangeFilter from "./filters/range-filter.vue";
import CheckBoxFilter from './filters/checkbox-filter.vue'
import {APIFilterType} from '~~/src/helpers/api.types'

interface CategoryCatalog {
	id: number;
	sectionHandle: string;
}

const catalogStore = useCatalogStore();
const { filters } = storeToRefs(catalogStore);

const { data } = await useAsyncData("filters", () =>
	catalogStore.getFilters(props.sectionHandle)
);

onMounted(() => {
	if (data.value?.price) catalogStore.setRangeFilters('price', data.value?.price)
	if (data.value?.filter) {
		for (const filter of data.value.filter) {
			filters.value[filter.id] = {
				isActive: false,
				type: filter.type,
				value: [],
			}
		}
	}
})

const resetRange = (name: string) => {
	const range = {
		min: data.value?.price.min || 0,
		max: data.value?.price.max || 100
	}
	catalogStore.resetRangeFilters(name, range)
	nextTick(() => catalogStore.setActiveFilter(name, false))
}

const setRangeMin = (name: string, min: number) => {
	catalogStore.setActiveFilter(name)
	catalogStore.setRangeMin(name,min)
}

const setCheckbox = (name: string, value: any) => {
	catalogStore.setActiveFilter(name)
	catalogStore.setCheckbox(name, value)
}

const setRangeMax = (name: string, max: number) => {
	catalogStore.setActiveFilter(name)
	catalogStore.setRangeMax(name, max)
}

const props = defineProps<CategoryCatalog>();
</script>
<template>
	<div v-if="data" class="max-w-[15.5rem] flex flex-col gap-8">
		<RangeFilter
			title="Цена, ₽"
			:min-value="filters['price'].value[0]"
			:max-value="filters['price'].value[1]"
			@update:max-value="setRangeMin('price', $event)"
			@update:min-value="setRangeMax('price', $event)"
			:is-active="filters['price'].isActive"
			:min="data.price.min"
			:max="data.price.max"
			@reset="resetRange('price')"
		/>
		<template v-for="filter of data.filter">
		<CheckBoxFilter 
			v-if="filter.type === APIFilterType.checkbox"
			:title="filter.title"
			:is-active="filters[filter.id]?.isActive"
			:values="filter.values"
			:model-value="filters[filter.id]?.value"
			@update:model-value="setCheckbox(filter.id.toString(), $event)"
		/>
		</template>
	</div>
</template>
