<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCatalogStore } from "~~/src/domain/catalog/catalog.store";
import { APILinkType } from "~~/src/helpers/api.types";
import { APILinkCatalog } from "~~/src/helpers/api.types";

const catalogStore = useCatalogStore();
const { categories } = storeToRefs(catalogStore);
const { handle } = useActiveHandle();
const selectedCategoryId: Ref<number | null> = ref(null);
const isActive = (link: APILinkCatalog, id: number): boolean => {
	if (selectedCategoryId.value) return id === selectedCategoryId.value;

	if (handle.value.indexOf(link.handle) !== -1) {
		selectedCategoryId.value = id;
		return true;
	}
	return false;
};

const selectedCategory = computed(() => {
	if (selectedCategoryId.value) {
		console.log(
			categories.value.find(
				(category) => category.id === selectedCategoryId.value
			)
		);
		return categories.value.find(
			(category) => category.id === selectedCategoryId.value
		);
	}
	return null;
});
</script>
<template>
	<Teleport to="#header">
		<div
			class="fixed bg-secondary-lightBlue h-[calc(100vh_-_10.75rem)] top-[10.75rem] w-full left-0 z-50"
		>
			<div
				class="max-w-screen-2xl mx-auto grid grid-cols-[minmax(200px,_1fr)_3fr] h-full"
			>
				<div class="flex flex-col items-end p-7 gap-2">
					<button
						type="button"
						v-for="mainCategory of categories"
						:key="mainCategory.id"
						@click="selectedCategoryId = mainCategory.id"
						class="flex items-center group h-15 cursor-pointer w-full rounded-2xl max-w-[15.75rem] px-5 gap-3 py-1.5"
						:class="{ 'bg-white': isActive(mainCategory.link as APILinkCatalog, mainCategory.id) }"
					>
						<img
							v-if="mainCategory.icon"
							:src="mainCategory.icon"
						/>
						<span
							class="group-hover:text-primary-blue label-semibold"
							>{{ mainCategory.title }}</span
						>
						<nuxt-icon
							name="20/arrow"
							class="text-gray-700 ml-auto"
							v-if="isActive(mainCategory.link as APILinkCatalog, mainCategory.id)"
						/>
					</button>
				</div>
				<div
					class="bg-white px-15 py-10 w-full h-full before:bg-white before:-top-10 before:absolute before:left-1/2 before:-z-10 before:w-full before:h-full"
				>
					<template v-if="selectedCategory">
						<h2 class="h2 mb-5">{{ selectedCategory.title }}</h2>
						<div
							class="max-h-[calc(100vh_-_18.5rem)] overflow-y-auto"
						>
							<div class="columns-3 max-w-full gap-8 w-full">
								<div
									v-for="item of selectedCategory.children"
									:key="item.id"
									class="mb-8 break-inside-avoid-column"
								>
									<nuxt-link
										v-if="
											item.link.type ===
											APILinkType.catalog_section
										"
										class="font-semibold mb-4 block transition-colors hover:text-primary-blue"
										:to="'/catalog/' + item.link.handle"
										>{{ item.title }}</nuxt-link
									>

									<ul
										v-if="item.children"
										class="flex flex-col gap-3"
									>
										<li
											v-for="subitem of item.children"
											:key="subitem.id"
										>
											<nuxt-link
												v-if="
													subitem.link.type ===
													APILinkType.catalog_section
												"
												:to="
													'/catalog/' +
													subitem.link.handle
												"
												class="text-gray-800 hover:text-primary-blue"
											>
												{{ subitem.title }}</nuxt-link
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</Teleport>
</template>
