export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: import.meta.env.VITE_PUBLIC_API_ENDPOINT,
        onRequest({ request, options, error }) {
            options.headers = {
                ...options.headers,
                Accept: 'application/json',
              'Content-Type': 'application/json'
            }
        },
    })

    return {
        provide: {
            api
        }
    }
})
