<template>
	<!-- overflow-hidden -->
	<div class="flex h-screen">
		<!-- <aside>
            <div>test</div>
		</aside> -->
		<div class="flex-1">
			<header class="flex  items-center bg-gray-900 min-h-16 px-4 py-2 text-white text-lg">Trello Nuxt Clone</header>
			<main class="bg-gray-300 image-background">
				<slot></slot>
			</main>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style>
.image-background {
	background-image: url('../assets/img/background-desert.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
</style>
