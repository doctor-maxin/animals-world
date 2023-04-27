import { defineStore } from 'pinia'
import { APIVendorItem, APIVendorsResponse } from '~~/src/helpers/api.types'

interface VendorsState {
    popularVendors: APIVendorItem[]
}

export const useVendorsStore = defineStore('vendors', {
    state: (): VendorsState => ({
        popularVendors: []
    }),
    actions: {
        async getPopularList() {
            const { client } = useAPI()
            return await client.get<APIVendorsResponse>('/vendor', {
                query: {
                    popular: true
                }
            })
        }
    }
})
