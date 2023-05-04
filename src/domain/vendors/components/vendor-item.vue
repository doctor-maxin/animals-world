<script setup lang="ts">
import { APIProductItem } from '~~/src/helpers/api.types'
import { useCatalogStore } from '../../catalog/catalog.store'
import { useVendorsStore } from '../vendors.store'
import VendorItemImage from './vendor-item-image.vue'
import VendorItemInfo from './vendor-item-info.vue'

const route = useRoute()

const vendorsStore = useVendorsStore()
const catalogStore = useCatalogStore()
const { data } = await useAsyncData('vendor', () =>
    vendorsStore.getVendor(route.params.id as string)
)

const popularProducts: Ref<APIProductItem[]> = ref([])
const vendorProducts: Ref<APIProductItem[]> = ref([])

const meta = ref({
    title: '',
    description: '',
    ogImage: '',
    keywords: '',
    ogTitle: '',
    ogDescription: ''
})

watch(
    data,
    async () => {
        if (data.value?.seo) {
            const {
                og_description,
                og_img,
                og_title,
                seo_description,
                seo_keywords,
                seo_title
            } = data.value.seo
            meta.value.title = seo_title
            meta.value.description = seo_description
            meta.value.ogImage = og_img
            meta.value.keywords = seo_keywords
            meta.value.ogTitle = og_title
            meta.value.ogDescription = og_description
        }
        if (data.value?.id) {
            catalogStore
                .getProducts({
                    brand_id: data.value.id,
                    popular: true,
                    page_size: 10
                })
                .then((list) => {
                    popularProducts.value = list
                })
            catalogStore
                .getProducts({
                    brand_id: data.value.id,
                    page_size: 10
                })
                .then((list) => (vendorProducts.value = list))
        }
    },
    {
        immediate: true,
        deep: true
    }
)

useHead({
    title: () => data.value?.title || ''
})
</script>
<template>
    <div class="max-w-screen-2xl py-12 mx-auto min-h-available-screen">
        <Suspense>
            <div v-if="data" class="flex flex-col gap-10 lg:gap-20">
                <div
                    class="grid grid-cols-[minmax(21.875rem,_32.5rem),_minmax(21.875rem,_54.375rem)]"
                >
                    <VendorItemImage :image="data.image" />
                    <VendorItemInfo
                        :title="data.title"
                        :description="data.text"
                    />
                </div>
                <BlocksProductsBlock
                    title="Популярные товары бренда"
                    v-if="popularProducts && popularProducts.length"
                    :list="popularProducts"
                />
                <BlocksProductsBlock
                    title="Товары бренда"
                    v-if="vendorProducts && vendorProducts.length"
                    :list="vendorProducts"
                />
            </div>
            <template #fallback>
                <UiSpinner />
            </template>
        </Suspense>
    </div>
</template>
