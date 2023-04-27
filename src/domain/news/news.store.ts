import { defineStore } from 'pinia'
import { APINewsResponse } from '~~/src/helpers/api.types'

interface NewsState {}

export const useNewsStore = defineStore('news', {
    state: (): NewsState => ({}),
    actions: {
        async getNews(limit: number) {
            const { client } = useAPI()

            return client.get<APINewsResponse>('/news', {
                query: {
                    page_size: limit
                }
            })
        }
    }
})
