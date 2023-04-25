import { defineStore } from 'pinia'
import { APIBannerResponse } from '~/helpers/api.types'

export const useBannerStore = defineStore('banners', {
    state: () => ({}),
    actions: {
        async getBanner(handle: string) {
            const { client } = useAPI()

            return client.get<APIBannerResponse>('/banner', {
                query: {
                    handle
                }
            })
        }
    }
})
