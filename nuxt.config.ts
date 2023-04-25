// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/main.css', '~/assets/scss/common.scss'],
    srcDir: './src/',
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icons',
        'nuxt-swiper'
    ],
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
                    target: 'https://animal-world.demoalente.ru',
                    changeOrigin: true
                }
            }
        }
    }
})
