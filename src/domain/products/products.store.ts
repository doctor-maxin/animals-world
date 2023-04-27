import { defineStore } from 'pinia'
import { APIProductsResponse } from '~~/src/helpers/api.types'

interface ProductsState {}

export const useProductsStore = defineStore('products', {
    state: (): ProductsState => ({
        products: []
    }),
    actions: {
        async getList(goods: number[]) {
            const { client } = useAPI()
            return await client.get<APIProductsResponse>('/catalog', {
                query: {
                    good_id: goods
                }
            })
        }
    }
})
