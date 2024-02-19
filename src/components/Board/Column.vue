<template>
	<div class="bg-slate-900 px-3 py-2 rounded-md w-[250px] column overflow-hidden">
		<div class="flex justify-between items-center mb-2">
			<slot name="title" />
			<div class="flex px-1 py-1 cursor-pointer rounded-md hover:bg-gray-500">
				<Icon
					name="mdi:dots-horizontal"
					class="text-white"
					size="20px"
				/>
			</div>
		</div>
		<div class="px-2">
			<slot name="tasks" />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
