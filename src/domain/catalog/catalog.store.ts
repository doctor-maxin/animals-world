import { defineStore } from "pinia";
import { APISeoBlock } from "~~/src/helpers/api.types";
import {
	APICatalogItem,
	APICatalogResponse,
	APIProductItem,
	APISeoPage,
	APIFilterResponse,
} from "~~/src/helpers/api.types";

interface CatalogState {
	categories: APICatalogItem[];
	seo: APISeoPage | null;
	title: string;
	filters: any;
	mainSeoBlock: APISeoBlock | null;
}

export const useCatalogStore = defineStore("catalog", {
	state: (): CatalogState => ({
		categories: [],
		seo: null,
		filters: {},
		title: "Каталог",
		mainSeoBlock: null,
	}),
	getters: {
		getMainCategories: (
			state
		): Omit<APICatalogItem, "children" | "seo" | "seo_block">[] =>
			state.categories.map((category) => ({
				link: category.link,
				title: category.title,
				id: category.id,
				image: category.image,
			})),
	},
	actions: {
		setCategories(items: APICatalogItem[]) {
			this.categories = items;
		},
		setSeoBlock(block: APISeoBlock) {
			this.mainSeoBlock = block;
		},
		setCatalogInfo(item: APICatalogItem) {
			this.seo = item.seo;
			this.title = item.title;
		},
		async getProducts(query?: ProductFilters) {
			const { client } = useAPI();
			return client.get<APIProductItem[]>("/catalog_good", {
				query,
			});
		},
		async getFilters(section_handle: string) {
			const { client } = useAPI();
			return client.get<APIFilterResponse>("/catalog_good/filter", {
				query: {
					section_handle,
				},
			});
		},
		async getCategories(handle?: string) {
			const { client } = useAPI();
			const query: any = {};
			if (handle) {
				query.handle = handle.endsWith("/")
					? handle.slice(0, -1)
					: handle;
			}
			console.log("GET HANDLE ", query, handle);
			return client.get<APICatalogResponse>("/catalog_section", {
				query,
			});
		},
	},
});

interface ProductFilters {
	sort?: ProductFiltersSort;
	sort_direct?: ProductFiltersSortDirect;
	available?: boolean;
	action?: boolean;
	novelty?: boolean;
	popular?: boolean;
	section_handle?: string;
	brand_id?: number;
	price_min?: number;
	price_max?: number;
	good_id?: number[];
	page?: number;
	page_size?: number;
	filter?: any[];
}

export type ProductFiltersSortDirect = "asc" | "desc";

const enum ProductFiltersSort {
	"price" = "price",
	"popular" = "popular",
	"rating" = "rating",
}
