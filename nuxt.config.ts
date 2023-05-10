import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/main.css', '~/assets/scss/common.scss'],
    srcDir: './src/',
    alias: {
        '#domain': resolve(__dirname, './src/domain')
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icons',
        'nuxt-swiper'
    ],
    components: [
        { path: '~/domain/blocks', prefix: 'Blocks' },
        { path: '~/components' },
        { path: '~/domain/banners' },
        { path: '~/domain/catalog/components' },
        { path: '~/domain/vendors' },
        { path: '~/domain/products/components', prefix: 'ProductCard' }
    ],
    typescript: {
        includeWorkspace: true,
        tsConfig: resolve(__dirname, './tsconfig.json')
    },
    // plugins: [{ src: '~/plugins/auto-import-components.ts', mode: 'client' }],
    // ssr: true,
    routeRules: {
        // '/': { prerender: true }
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    devServer: {
        port: Number(process.env.SERVER_PORT) || 3000
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/fonts.scss" as *;'
                }
            }
        },
        server: {
            proxy: {
                '/api/': {
                    target: process.env.PROD_URL,
                    changeOrigin: true
                }
            }
        }
    }
})
