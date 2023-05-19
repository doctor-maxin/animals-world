<script setup lang="ts">
import { APIProductPage } from "~~/src/helpers/api.types";

interface ProductPageProps {
	handle?: string | string[];
	categories?: any;
	product: APIProductPage;
}

defineProps<ProductPageProps>();
</script>
<template>
	<Suspense>
		<div>
			<div>
				<ProductCardDetailSlider :images="product.images" />
				<ProductCardDetailInfo />
				<ProductCardDetailAction />
			</div>
			<div>
				<ProductCardDetailTabs />
			</div>
			<BlocksProductsBlock title="" :list="product.same_goods" />
		</div>
	</Suspense>
</template>
