// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	srcDir: 'src/',
	typescript: {
		strict: true,
	},
	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
})
