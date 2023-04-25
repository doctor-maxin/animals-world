import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'main',
            path: '/',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'about',
            path: '/about',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'legal',
            path: '/legal',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'contacts',
            path: '/contacts',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'vacancy',
            path: '/vacancy',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'delivery',
            path: '/delivery',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'shops',
            path: '/shops',
            component: () =>
                import('~/domain/main/main.page.vue').then(
                    (r) => r.default || r
                )
        },
        {
            name: 'catalog',
            path: '/catalog',
            component: () =>
                import('~/domain/catalog/catalog.page.vue').then(
                    (r) => r.default || r
                ),
            children: [
                {
                    path: ':id',
                    component: () =>
                        import('~/domain/catalog/category.page.vue').then(
                            (r) => r.default || r
                        )
                }
            ]
        }
    ]
}
