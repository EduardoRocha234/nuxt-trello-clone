<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	useHead({
		htmlAttrs: {
			lang: 'pt-BR',
		},
		meta: [
			{
				name: 'description',
				content:
					'Trello vue',
			},
		],
	})
</script>
