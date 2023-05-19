import type { RouterConfig } from "@nuxt/schema";
import { useCatalogStore } from "../domain/catalog/catalog.store";
import { useProductsStore } from "../domain/products/products.store";
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
	routes: (_routes: any) => [
		{
			name: "main",
			path: "/",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "about",
			path: "/about",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "legal",
			path: "/legal",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "contacts",
			path: "/contacts",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "vacancy",
			path: "/vacancy",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "delivery",
			path: "/delivery",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "shops",
			path: "/shops",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "catalog-item",
			props: true,
			path: "/catalog/:handle(.*)*",
			component: () =>
				import("~/domain/catalog/category.page.vue").then(
					(r: any) => r.default || r
				),
			children: [
				{
					path: "/catalog/:handle(.*)*",
					name: "product-detail",
					props: true,
					component: () =>
						import("~/domain/products/product.page.vue").then(
							(r: any) => r.default || r
						),
				},
			],
		},
		{
			name: "catalog",
			path: "/catalog",
			component: () =>
				import("~/domain/catalog/catalog.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			name: "vendors",
			path: "/vendors",
			component: () =>
				import("~/domain/vendors/vendor.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			path: "/vendors/:id",
			component: () =>
				import("~/domain/vendors/components/vendor-item.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			path: "/user_policy",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			path: "/private_policy",
			component: () =>
				import("~/domain/main/main.page.vue").then(
					(r: any) => r.default || r
				),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () =>
				import("~/components/common/NotFound.vue").then(
					(r: any) => r.default || r
				),
		},
	],
};
