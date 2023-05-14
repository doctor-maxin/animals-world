import { mande } from 'mande'
export const useAPI = () => {
    const client = mande(
        `http://localhost:3000/api`
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
