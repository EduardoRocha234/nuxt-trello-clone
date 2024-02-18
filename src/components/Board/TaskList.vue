<template>
	<draggable
		:list="tasks"
		:group="{name: 'tasks', put: true}"
		class="flex flex-col w-full gap-2 overflow-x-auto text-white py-2 overflow-hidden"
		item-key="id"
		ghost-class="ghost-class"
		@start="drag = true"
		@end="drag = false"
		:animation="150"
	>
		<template #item="{element: task}: {element: TaskType}">
			<BoardTask v-model="task.title" />
		</template>
		<template
			v-if="addNewTask"
			#footer
		>
			<textarea
				ref="newTaskWrapperRefTextarea"
				class="text-white appearance-none resize-none text-sm py-2 px-2 py-2 w-full bg-slate-700 rounded-md h-auto reset focus-none outline-none input"
				v-model="newTask"
				placeholder="Enter a title for this card..."
				@focus="clickOutsideTextearea = false"
			/>
		</template>
	</draggable>
	<button
		v-if="!addNewTask"
		@click="handleAddTask()"
		class="flex items-center gap-2 w-full px-2 py-1 text-white text-sm rounded-md hover:bg-gray-500 transition-colors"
	>
		<Icon
			name="mdi:plus"
			size="20px"
		/>
		Add a Card
	</button>
	<div
		v-else
		class="flex items-center gap-1"
		ref="newTaskWrapperRef"
	>
		<button
			@click="addTask()"
			class="px-3 py-2 text-white text-sm bg-blue-900 rounded-md hover:bg-blue-800 transition-colors"
		>
			Add Card
		</button>
		<div
			class="hover:bg-gray-500 py-1.5 px-2 rounded-md h-full cursor-pointer transition-colors"
			@click="closeAddTask()"
		>
			<Icon
				name="mdi:close"
				class="text-white"
				size="20px"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import {onClickOutside} from '@vueuse/core'
import type {TaskType, NewTaskType} from '@/types/board.type'

const props = defineProps<{
	tasks: TaskType[]
	columnId: string
}>()

const emit = defineEmits<{
	(event: 'addTask', value: NewTaskType): void
}>()

const newTaskWrapperRef = ref<HTMLElement | null>(null)
const newTaskWrapperRefTextarea = ref<HTMLElement | null>(null)

const newTask = ref<string>('')
const addNewTask = ref<boolean>(false)
const drag = ref<boolean>(false)
const clickOutsideTextearea = ref<boolean>(false)

const closeAddTask = () => {
	addNewTask.value = false
	newTask.value = ''
}

const addTask = () => {
	if (newTask.value) {
		emit('addTask', {taskValue: newTask.value, columnId: props.columnId})
		closeAddTask()
	}
}

const handleAddTask = () => {
	if (!addNewTask.value) addNewTask.value = true
	else addNewTask.value = false
}

onClickOutside(newTaskWrapperRefTextarea, () => {
	clickOutsideTextearea.value = true
})

onClickOutside(newTaskWrapperRef, () => {
	if (clickOutsideTextearea.value && !newTask.value) closeAddTask()
	else addTask()
})

provide('drag', drag)
</script>

<style scoped>
.ghost-class {
	content: '';
	background-color: #3c434d !important;
	color: #3c434d !important;
}
</style>
