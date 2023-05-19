import { useCatalogStore } from "../domain/catalog/catalog.store";
import { useProductsStore } from "../domain/products/products.store";

export default defineNuxtRouteMiddleware(async (to, from) => {
	console.log("ROUTENAME", to.name, to.params.handle);
	if (to.name === "product-detail") {
		let handle = "";
		let sectionHandle = "";
		let categoriesHandle = "";

		if (Array.isArray(to.params.handle)) {
			categoriesHandle =
				to.params.handle.length > 1
					? to.params.handle.join("/")
					: to.params.handle[0];
			handle = to.params.handle.slice(-1)[0] as string;
			sectionHandle =
				to.params.handle.slice(0, -1).length > 1
					? to.params.handle.join("/")
					: to.params.handle[0];
		} else {
			categoriesHandle = handle;
			handle = handle;
			sectionHandle = handle;
		}
		const catalogStore = useCatalogStore();
		const productStore = useProductsStore();

		const { data: categories } = await useAsyncData(
			"catalog-" + categoriesHandle,
			() => catalogStore.getCategories(categoriesHandle)
		);

		const { data: product } = await useAsyncData("product", () =>
			productStore.getProduct(handle, sectionHandle)
		);

		console.log(
			"GETPRODUCT",
			product.value,
			Array.isArray(handle) ? (handle.pop() as string) : handle
		);
		//@ts-ignore
		to.params.categories = categories.value;
		//@ts-ignore
		to.params.product = product.value;
	} else if (to.name === "catalog-item") {
		const handle = to.params.handle || "";
		const catalogStore = useCatalogStore();

		const { data: categories } = await useAsyncData(
			"catalog-" + handle.toString(),
			() => catalogStore.getCategories(handle)
		);

		//@ts-ignore
		to.params.categories = categories.value;
	}
	// if (to.params.id === '1') {
	//   return abortNavigation()
	// }
	// if (to.path !== '/') {
	//   return navigateTo('/')
	// }
});
