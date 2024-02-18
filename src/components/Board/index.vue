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
		</draggable>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import {nanoid} from 'nanoid'
import type {ColumType, NewTaskType} from '@/types/board.type'

const drag = ref<boolean>(false)

const board = reactive<ColumType[]>([
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
	const colIdx = board.findIndex((t) => t.id === columnId)
	if (colIdx !== -1) {
		board[colIdx].tasks.push({
			id: nanoid(),
			title: taskValue,
			createdAt: new Date(),
		})
	}
}
</script>
<style scoped></style>
