import { defineStore } from 'pinia'
import { APIProductsResponse } from '~~/src/helpers/api.types'

interface ProductsState {}

export const useProductsStore = defineStore('products', {
    state: (): ProductsState => ({
        products: []
    }),
    actions: {
        async getList(goods: number[]) {
            const good_ids: any = {}

            goods.forEach(
                (item, index) => (good_ids[`good_id[${index}]`] = item)
            )

            const { client } = useAPI()
            return client.get<APIProductsResponse>('/catalog_good/list', {
                query: good_ids
            })
        }
    }
})
