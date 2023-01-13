// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ['@nuxtjs/tailwindcss'],
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],

})
