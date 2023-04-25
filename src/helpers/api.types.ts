export type APIMenuType = 'top' | 'bottom' | 'bottom_2'
export type APIMenuLinks = APIMenuLink[]
export type APIMenuLink = {
    title: string
    link: APILink
}
//  BANNERS
export type APIBannerResponse = APIBannerItem[]
export type APIBannerItem = {
    id: number
    title: string
    link: APILink
    image: APIImage
}

export type APIConfigReponse = APIConfigItem[]
export type APIConfigItem = {
    module: string
    code: string
    value: string
}

export type APIImage = {
    title: string
    alt: string
    src: {
        orig: string
    }
}
export type APILink =
    | {
          type: APILinkType.url
          href: string
      }
    | {
          type: APILinkType.catalog_good
          handle: string
          section_handle: string
      }
    | {
          type: APILinkType.catalog_section
          handle: string
      }
    | {
          type: APILinkType.news
          handle: string
      }
    | {
          type: APILinkType.action
          handle: string
      }
    | {
          type: APILinkType.page
          handle: string
      }

export const enum APILinkType {
    url = 'url',
    catalog_good = 'catalog_good',
    catalog_section = 'catalog_section',
    news = 'news',
    action = 'action',
    page = 'page'
}

//  CATALOG
export type APICatalogResponse = APICatalogItem

export type APICatalogItem = {
    id: number
    title: string
    link: APILink
    image: APIImage
    seo_block: APISeoBlock[]
    children: APICatalogItem[]
    seo: APISeoPage
}

export type APISeoBlock = {}
export type APISeoPage = {
    seo_title: string
    seo_description: string
    seo_keywords: string
    og_title: string
    og_description: string
    og_img: string
}

// socials
export type APISocials = APISocial[]
export type APISocial = {
    title: string
    icon: string
    url: string
}
