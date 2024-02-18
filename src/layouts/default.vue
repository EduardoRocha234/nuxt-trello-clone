<template>
    <!-- overflow-hidden -->
	<div class="flex h-screen ">
		<!-- <aside>
            <div>test</div>
		</aside> -->
		<div class="flex-1">
			<header class="bg-gray-200 min-h-16 px-4 py-2">
				Trello clone
			</header>
			<main class="bg-gray-300">
				<slot></slot>
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
