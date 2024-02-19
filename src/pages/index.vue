<template>
	<div class="h-screen p-4">
		<Board :board="boardListExample"/>
	</div>
</template>

<script setup lang="ts">
import {nanoid} from 'nanoid'
import {useLocalStorage} from '@vueuse/core'
import type {ColumType} from '~/types/board.type'

const boardListExample = useLocalStorage<ColumType[]>('boardList', [
	{
		id: nanoid(),
		name: 'Product Backlog',
		tasks: [
			{
				id: nanoid(),
				title: 'Fix bug',
				createdAt: new Date(),
			},
			{
				id: nanoid(),
				title: 'Fix bug 1',
				createdAt: new Date(),
			},
			{
				id: nanoid(),
				title: 'Fix bug 2',
				createdAt: new Date(),
			},
		],
	},
	{
		id: nanoid(),
		name: 'Sprint Backlog',
		tasks: [],
	},
	{
		id: nanoid(),
		name: 'In Progress',
		tasks: [],
	},
	{
		id: nanoid(),
		name: 'Done',
		tasks: [],
	},
])
</script>
<style scoped></style>
