import { mande } from 'mande'
export const useAPI = () => {
    const client = mande(
        `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api`
    )

    const setToken = (token: string) => {
        client.options.headers.Authorization = 'Bearer ' + token
    }
    const clearToken = () => delete client.options.headers.Authorization

    return {
        client,
        setToken,
        clearToken
    }
}
