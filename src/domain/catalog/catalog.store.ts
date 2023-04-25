import { defineStore } from 'pinia'
import {
    APICatalogItem,
    APICatalogResponse,
    APISeoPage
} from '~~/src/helpers/api.types'

interface CatalogState {
    categories: APICatalogItem[]
    seo: APISeoPage | null
    title: string
}

export const useCatalogStore = defineStore('catalog', {
    state: (): CatalogState => ({
        categories: [],
        seo: null,
        title: 'Каталог'
    }),
    getters: {
        getMainCategories: (
            state
        ): Omit<APICatalogItem, 'children' | 'seo' | 'seo_block'>[] =>
            state.categories.map((category) => ({
                link: category.link,
                title: category.title,
                id: category.id,
                image: category.image
            }))
    },
    actions: {
        setCategories(items: APICatalogItem[]) {
            this.categories = items
        },
        setCatalogInfo(item: APICatalogItem) {
            this.seo = item.seo
            this.title = item.title
        },
        async getCategories() {
            const { client } = useAPI()
            return client.get<APICatalogResponse>('/catalog_section')
        }
    }
})
