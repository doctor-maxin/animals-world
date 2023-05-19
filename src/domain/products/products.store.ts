import { defineStore } from "pinia";
import { APIProductItem, APIProductsResponse } from "~~/src/helpers/api.types";

interface ProductsState {}

export const useProductsStore = defineStore("products", {
	state: (): ProductsState => ({
		products: [],
	}),
	actions: {
		async getList(goods: number[]) {
			const good_ids: any = {};

			goods.forEach(
				(item, index) => (good_ids[`good_id[${index}]`] = item)
			);

			const { client } = useAPI();
			return client.get<APIProductsResponse>("/catalog_good/list", {
				query: good_ids,
			});
		},
		async getProduct(handle: string, sectionHandle?: string) {
			const { client } = useAPI();
			const query: any = {
				handle,
			};
			if (sectionHandle) query.section_handle = sectionHandle;
			console.log("Get Product handle ", query);
			return client.get<APIProductItem>("/catalog_good/detail", {
				query,
			});
		},
	},
});
