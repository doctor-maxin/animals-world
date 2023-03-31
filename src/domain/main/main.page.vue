<script setup lang="ts">
import { useCatalogStore } from '../catalog/catalog.store'
import { useNewsStore } from '../news/news.store'
import { useProductsStore } from '../products/products.store'
import { useVendorsStore } from '../vendors/vendors.store'
import { useMainStore } from '#domain/main/main.store'
import { APINewsItem, APIProductItem } from '~~/src/helpers/api.types'

const mainStore = useMainStore()
const vendorsStore = useVendorsStore()
const { data } = useAsyncData('main-page', () => mainStore.getPage('/'))
const { data: vendors } = useAsyncData('vendors', () =>
    vendorsStore.getPopularList()
)
const newsStore = useNewsStore()
const catalogStore = useCatalogStore()
const productsStore = useProductsStore()
const newsList: Ref<APINewsItem[]> = ref([])
const productList: Ref<APIProductItem[]> = ref([])
const titles = reactive({
    products: 'Бестселлеры',
    news: 'Новости',
    vendors: 'Бренды'
})
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

        if (data.value?.blocks.length) {
            const blocks = data.value.blocks
            const hasNews = blocks.find(
                (block: any) => block.block_type === 'news'
            )
            if (hasNews) {
                const news = await newsStore.getNews(3)
                titles.news = hasNews.title
                if (news && news.length) {
                    newsList.value = news
                }
            }
            const goodsBlock = blocks.find(
                (block) => block.block_type === 'goods'
            )
            if (goodsBlock && goodsBlock.good_ids?.length) {
                titles.products = goodsBlock.title
                const products = await productsStore
                    .getList(Object.values(goodsBlock.good_ids))
                    .catch((err) => console.log('ERR', err))
                if (products && products.length) {
                    productList.value = products
                }
            }
        }
    },
    {
        immediate: true
    }
)

useHead({
    title: () => data.value?.title || ''
})

useSeoMeta(meta)
</script>
<template>
    <main class="py-12 flex flex-col gap-20 min-h-screen">
        <Banner variant="primary" handle="main" />
        <BlocksCategoriesBlock :list="catalogStore.getMainCategories" />
        <BlocksProductsBlock
            class="max-w-screen-2xl mx-auto"
            :title="titles.products"
            :desktop-per-screen="5"
            v-if="productList && productList.length"
            :list="productList"
        />
        <BlocksVendorsBlock
            :title="titles.vendors"
            v-if="vendors && vendors.length"
            :list="vendors"
        />
        <BlocksNewsBlock
            :title="titles.news"
            v-if="newsList && newsList.length"
            :list="newsList"
        />
    </main>
</template>
