import { defineStore } from 'pinia'
import {
    APIConfigReponse,
    APIMenuLinks,
    APISocials,
    APIMenuType,
    APIPageDetail
} from '~~/src/helpers/api.types'

interface MainState {
    config: {
        header: {
            city: string
            logo: string
            phone: string
            worktime: string
        }
        footer: {
            copyright: string
            logo: string
            phone: string
            worktime: string
        }
    }
}

export const useMainStore = defineStore('main', {
    state: (): MainState => ({
        config: {
            header: {
                city: 'Красноярск',
                logo: '',
                phone: '73912061155',
                worktime: '09:00-21:00'
            },
            footer: {
                worktime: '',
                phone: '',
                copyright: '',
                logo: ''
            }
        }
    }),
    actions: {
        async getPage(handle: string) {
            const { client } = useAPI()

            return client.get<APIPageDetail>('/page/detail', {
                query: {
                    handle
                }
            })
        },
        async getMenu(menuType: APIMenuType) {
            const { client } = useAPI()

            return client.get<APIMenuLinks>('/menu', {
                query: {
                    handle: menuType
                }
            })
        },
        setConfig(modules: APIConfigReponse) {
            for (const module of modules) {
                switch (module.code) {
                    case 'footer_worktime':
                        this.config.footer.worktime = module.value
                        break
                    case 'footer_phone':
                        this.config.footer.phone = module.value
                        break
                    case 'copyright':
                        this.config.footer.copyright = module.value
                        break
                    case 'footer_logo':
                        this.config.footer.logo = module.value
                        break
                    case 'header_phone':
                        this.config.header.phone = module.value
                        break
                    case 'header_worktime':
                        this.config.header.worktime = module.value
                        break
                    case 'city':
                        this.config.header.city = module.value
                        break
                    case 'header_logo':
                        this.config.header.logo = module.value
                        break
                }
            }
        },
        async getConfig(module: string) {
            const { client } = useAPI()

            return client.get<APIConfigReponse>('/config', {
                query: {
                    module
                }
            })
        },
        async getSocials() {
            const { client } = useAPI()

            return client.get<APISocials>('/socials')
        }
    }
})
