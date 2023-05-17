<script setup lang="ts">
import { APIProductItem } from "~~/src/helpers/api.types";

interface CategoryProducts {
	list: APIProductItem[];
}

defineProps<CategoryProducts>();
</script>
<template>
	<template v-for="product of list" :key="product.id">
		<ProductCard variant="catalog" :item="product" />
	</template>
</template>
