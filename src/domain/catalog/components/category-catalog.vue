<script setup lang="ts">
import { useCatalogStore } from "../catalog.store";

interface CategoryCatalog {
	id: number;
	handle: string | string[];
}
const props = defineProps<CategoryCatalog>();
const categoryHandle = computed(() => {
	return Array.isArray(props.handle) ? props.handle.join("/") : props.handle;
});

const catalogStore = useCatalogStore();

const { data } = await useLazyAsyncData(() =>
	catalogStore.getProducts({ section_handle: categoryHandle.value })
);
</script>
<template>
	<div class="grid grid-cols-[17.625rem_auto] gap-7">
		<CategoryFilters :section-handle="categoryHandle" :id="id" />
		<div class="flex flex-col gap-7">
			<CategorySorting />
			<Suspense>
				<div class="grid grid-cols-4 gap-7">
					<CategoryProducts v-if="data" :list="data" />
				</div>
			</Suspense>
			<UiPagination />
		</div>
	</div>
</template>
