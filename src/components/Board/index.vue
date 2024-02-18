<template>
	<div class="">
		<draggable
			:list="board"
			:group="{name: 'cols', pull: false}"
			class="flex gap-4 overflow-x-auto items-start"
			item-key="id"
			:animation="150"
			@start="drag = true"
			@end="drag = false"
		>
			<template #item="{element: col}: {element: ColumType}">
				<BoardColumn @addCard="console.log('te')">
					<template #title>
						<Input
							class="text-white"
							v-model="col.name"
						/>
					</template>
					<template #tasks>
						<BoardTaskList
							:tasks="col.tasks"
							:column-id="col.id"
							@addTask="addNewTask"
						/>
					</template>
				</BoardColumn>
			</template>
			<template #footer>
				<button @click="addColumn()" class="w-60 text-white bg-gray-400 px-4 py-2 rounded-md hover:bg-gray-600">Add another list</button>
			</template>
		</draggable>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import {nanoid} from 'nanoid'
import {useLocalStorage} from '@vueuse/core'
import type {ColumType, NewTaskType} from '@/types/board.type'

const drag = ref<boolean>(false)

const board = useLocalStorage<ColumType[]>('boardList', [
	{
		id: nanoid(),
		name: 'teste 1',
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
		name: 'teste 2',
		tasks: [],
	},
	{
		id: nanoid(),
		name: 'teste 3',
		tasks: [],
	},
	{
		id: nanoid(),
		name: 'teste 4',
		tasks: [],
	},
])

const addNewTask = ({taskValue, columnId}: NewTaskType) => {
	const colIdx = board.value.findIndex((t) => t.id === columnId)
	if (colIdx !== -1) {
		board.value[colIdx].tasks.push({
			id: nanoid(),
			title: taskValue,
			createdAt: new Date(),
		})
	}
}

const addColumn = () => {
	const newColumn: ColumType = {
		id: nanoid(),
		name: 'New Column',
		tasks: [],
	}

	board.value.push(newColumn)
}
</script>
<style scoped></style>
