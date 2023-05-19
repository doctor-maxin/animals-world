export type APIMenuType = "top" | "bottom" | "bottom_2";
export type APIMenuLink = {
	title: string;
	link: APILink;
	children?: APIMenuLink[];
};
export type APIMenuLinks = APIMenuLink[];
//  BANNERS
export type APIBannerItem = {
	id: number;
	title: string;
	link: APILink;
	image: APIImage;
};
export type APIBannerResponse = APIBannerItem[];

export type APIConfigItem = {
	module: string;
	code: string;
	value: string;
};
export type APIConfigReponse = APIConfigItem[];

export type APIImage = {
	title: string;
	alt: string;
	src: {
		orig: string;
	};
};
export type APILink =
	| APILinkURL
	| APILinkGoods
	| APILinkCatalog
	| APILinkNews
	| APILinkAction
	| APILinkPage;

export type APILinkCatalog = {
	type: APILinkType.catalog_section;
	handle: string;
};

export type APILinkAction = {
	type: APILinkType.action;
	handle: string;
};

export type APILinkPage = {
	type: APILinkType.page;
	handle: string;
};

export type APILinkURL = {
	type: APILinkType.url;
	href: string;
};
export type APILinkNews = {
	type: APILinkType.news;
	handle: string;
};

export type APILinkGoods = {
	type: APILinkType.catalog_good;
	handle: string;
	section_handle: string;
};

export const enum APILinkType {
	url = "url",
	catalog_good = "catalog_good",
	catalog_section = "catalog_section",
	news = "news",
	action = "action",
	page = "page",
}

//  CATALOG
export type APICatalogResponse = APICatalogItem;

export enum APIFilterType {
	checkbox = "checkbox",
	range = "range",
}

export type APIFilterValue = {
	[key: number]: {
		id: number;
		title: string;
		count: number;
	};
};

export type APIFilterItem = {
	id: number;
	title: string;
	type: APIFilterType;
	count: number;
	range?: number[];
	values?: APIFilterValue[];
};

export type APIFilterResponse = {
	filter: APIFilterItem[];
	price: {
		min: number;
		max: number;
	};
};

export type APICatalogItem = {
	id: number;
	title: string;
	link: APILink;
	image: APIImage;
	icon?: string;
	seo_block: APISeoBlock;
	children: APICatalogItem[];
	seo: APISeoPage;
};

export type APISeoBlock = {
	title: string;
	text: string;
	image: APIImage;
};
export type APISeoPage = {
	seo_title: string;
	seo_description: string;
	seo_keywords: string;
	og_title: string;
	og_description: string;
	og_img: string;
};

// socials
export type APISocials = APISocial[];
export type APISocial = {
	title: stringƒ;
	icon: string;
	url: string;
};

// PAGE

export type APIPageDetails = APIPageDetail[];

export type APIPageDetail = {
	id: number;
	title: string;
	blocks: APIPageBlocks;
	seo: APISeoPage;
};

export type APIPageBlocks = APIPageBlock[];

export type APIPageBlock = {
	title: string;
	block_type:
		| "goods"
		| "news"
		| "text"
		| "image"
		| "slider"
		| "video"
		| "seo";
	list?: any[];
	good_ids?: number[];
};

//  NEWS
export type APINewsResponse = APINewsItem[];

export type APINewsItem = {
	id: number;
	date: string;
	title: string;
	text: string;
	image?: APIImage;
	link: APILinkNews;
};

//  PRODUCTS
export type APIProductsResponse = APIProductItem[];
export type APIProductItem = {
	id: number;
	title: string;
	available_lvl: number;
	rating: null | any;
	image: APIImage;
	tags: APITag[];
	price: number;
	price_old: number;
	link: APILinkGoods;
};

export type APIProductProperty = {
	title: string;
	value: string;
};

export type APIProductPage = Omit<APIProductItem, "image" | "tags"> & {
	available_shops: number;
	available: number;
	variants: boolean;
	rating_cnt: number;
	images: { image: APIImage }[];
	articul: string | null;
	text: string;
	brand: APIVendorItem[];
	tags: APITagFull[];
	properties: APIProductProperty[];
	same_goods: APIProductItem[];
	seo: APISeoPage;
};

//  TAGS
export type APITag = {
	name: string;
	title: string;
};

export type APITagFull = {
	id: number;
	title: string;
	handle: string;
	xml_id: number;
};

//  VENDORS
export type APISection = {
	id: string;
	title: string;
};
export type APIVendorItem = {
	id: number;
	title: string;
	link: APILinkNews;
	image: APIImage;
	section: APISection;
};
export type APIVendorsResponse = APIVendorItem[];

export type APIVendorSection = {
	id: number;
	title: string;
};

export type APIVendorItemExtended = Omit<APIVendorItem, "link"> & {
	text: string;
	seo: APISeoPage;
};

export type APIVendorSectionResponse = APIVendorSection[];

// META PAGES
export type MetaPage = {
	title: string;
	description: string;
	keywords: string;
	ogImage: string;
	ogTitle: string;
	ogDescription: string;
};
