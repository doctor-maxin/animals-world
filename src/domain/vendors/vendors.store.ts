import { defineStore } from 'pinia'
import {
    APIVendorItem,
    APIVendorsResponse,
    APIVendorItemExtended,
    APIVendorSectionResponse
} from '~~/src/helpers/api.types'

interface VendorsState {
    popularVendors: APIVendorItem[]
}

export const useVendorsStore = defineStore('vendors', {
    state: (): VendorsState => ({
        popularVendors: []
    }),
    actions: {
        async getVendors(sectionId?: number) {
            const { client } = useAPI()
            let query = sectionId ? { section_id: sectionId } : {}
            return await client.get<APIVendorsResponse>('/vendor', {
                query
            })
        },
        async getVendor(handle: string) {
            const { client } = useAPI()
            return await client.get<APIVendorItemExtended>(`/vendor/detail`, {
                query: {
                    handle
                }
            })
        },
        async getPopularList() {
            const { client } = useAPI()
            return await client.get<APIVendorsResponse>('/vendor', {
                query: {
                    popular: true
                }
            })
        },
        async getSectionList() {
            const { client } = useAPI()
            return await client.get<APIVendorSectionResponse>('/vendor_section')
        },
        setList(list: APIVendorItem[]) {
            this.popularVendors = list
        }
    }
})
