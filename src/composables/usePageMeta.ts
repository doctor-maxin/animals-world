import { APIPageBlock, MetaPage } from '../helpers/api.types'
import { useMainStore } from '~~/src/domain/main/main.store';

export const usePageMeta = () => {
    const title: Ref<string> = ref('')
    const blocks: Ref<APIPageBlock[]> = ref([])
    const seo: Ref<MetaPage> = ref({
        title: '',
        description: '',
        keywords: '',
        ogImage: '',
        ogTitle: '',
        ogDescription: ''
    })

    const loadPageData = (handle: string) => {
        const mainStore = useMainStore()
        const { data } = useAsyncData('page-' + handle, () => mainStore.getPage(handle))

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
                    seo.value.title = seo_title
                    seo.value.description = seo_description
                    seo.value.ogImage = og_img
                    seo.value.keywords = seo_keywords
                    seo.value.ogTitle = og_title
                    seo.value.ogDescription = og_description
                }

                blocks.value = data.value?.blocks || []
            },
            {
                immediate: true
            }
        )
    }

    return {
        seo, title, loadPageData, blocks
    }
}