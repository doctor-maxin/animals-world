<script setup lang="ts">
import { APICatalogItem, APIProductItem } from "~~/src/helpers/api.types";
const { params } = useRoute();

interface CatagoryProps {
	categories: APICatalogItem | null;
	product?: APIProductItem | null;
	handle: string | string[];
}

const props = defineProps<CatagoryProps>();

definePageMeta({
	middleware: ["catalog"],
});
</script>
<template>
	<div
		class="min-h-available-screen px-4 lg:px-0 max-w-screen-2xl py-13 items-center mx-auto w-full"
	>
		<Suspense>
			<template v-if="product">
				<router-view></router-view>
			</template>
			<template v-else-if="categories">
				<div class="flex flex-col gap-6 lg:gap-13">
					<h1 class="w-full">{{ categories.title }}</h1>

					<CatalogItem
						v-if="categories.children?.length"
						:list="categories.children"
					/>
					<CategoryCatalog
						v-else
						:id="categories.id"
						:handle="(params.handle as string)"
					/>
					<CommonSeoBlock
						v-if="categories.seo_block"
						:block="categories.seo_block"
					/>
				</div>
			</template>
		</Suspense>
	</div>
</template>
