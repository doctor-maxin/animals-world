<script setup lang="ts">
import { useProductsStore } from "../products/products.store";
import { useCatalogStore } from "./catalog.store";
const { params } = useRoute();

const catalogStore = useCatalogStore();
const productStore = useProductsStore();
console.log("STARTLOAD", params);

const { data } = await useAsyncData("catalog", () =>
	catalogStore.getCategories(params.handle as string)
);
const { data: product } = await useAsyncData("product", () =>
	productStore.getProduct(params.pathMatch.pop())
);
</script>
<template>
	<div
		class="min-h-available-screen px-4 lg:px-0 max-w-screen-2xl py-13 items-center mx-auto w-full"
	>
		<Suspense>
			<div v-if="data" class="flex flex-col gap-6 lg:gap-13">
				<h1 class="w-full">{{ data.title }}</h1>

				<CatalogItem
					v-if="data.children?.length"
					:list="data.children"
				/>
				<CategoryCatalog
					v-else
					:id="data.id"
					:handle="(params.handle as string)"
				/>
				<CommonSeoBlock v-if="data.seo_block" :block="data.seo_block" />
			</div>
		</Suspense>
	</div>
</template>
