// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineAppConfig({
    title: 'Hello world',
    server: {
        port: Number(process.env.SERVER_PORT) || 3000,
        host: process.env.SERVER_HOST || 'localhost'
    },
    theme: {}
})
