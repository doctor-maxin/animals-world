<script setup lang="ts">
import { Sort, SortDirect } from "~~/src/helpers/sorting.types";

const selectedSort: Ref<Sort> = ref(Sort.POPULAR);
const sortDirect: Ref<SortDirect> = ref(SortDirect.ASC);

const onSelect = (newType: Sort) => {
	if (newType === selectedSort.value) {
		sortDirect.value =
			sortDirect.value === SortDirect.ASC
				? SortDirect.DESC
				: SortDirect.ASC;
	} else selectedSort.value = newType;
};
</script>
<template>
	<div class="flex items-center gap-2">
		<span class="font-bold mr-3">Сортировать</span>
		<template v-for="sort of Object.values(Sort)">
			<category-sorting-item
				:type="sort"
				:selected="selectedSort"
				:direct="sortDirect"
				@select="onSelect"
			/>
		</template>
	</div>
</template>
