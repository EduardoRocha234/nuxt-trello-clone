<template>
	<div
		ref="taskWrapperRef"
		:class="[
			twMerge(
				'w-full flex overflow-hidden bg-slate-700 cursor-pointer px-2 py-2 rounded-md transition-colors',
				$attrs.class as string
			),
			{
				'bg-slate-800 border-2 border-zinc-400 cursor-text': inputIsFocused,
				'hover:border-2': !drag,
			},
		]"
		@dblclick="onFocusHandle()"
	>
		<div
			v-show="!inputIsFocused"
			class="break-all"
		>
			{{ taskValue }}
		</div>
		<textarea
			v-show="inputIsFocused"
			v-model="taskValue"
			:readonly="!inputIsFocused"
			class="text-white w-full resize-none appearance-none bg-transparent h-auto reset focus-none outline-none"
			@keydown.enter="inputIsFocused = false"
		/>
	</div>
</template>

<script setup lang="ts">
import {twMerge} from 'tailwind-merge'
import {onClickOutside} from '@vueuse/core'

const props = defineProps<{
	modelValue: string
}>()

const inputIsFocused = ref<boolean>(false)
const taskWrapperRef = ref<HTMLElement | null>(null)

const emit = defineEmits<{
	(event: 'update:modelValue', value: string): void
}>()

const onFocusHandle = () => (inputIsFocused.value = true)

const drag = inject<boolean>('drag', false)
const oldValue = ref<string>(props.modelValue)

onClickOutside(taskWrapperRef, () => {
	inputIsFocused.value = false
})

const taskValue = computed({
	get: () => props.modelValue,
	set: (value) => {
		emit('update:modelValue', value)
	},
})

watch(inputIsFocused, (newValue) => {
	if (!newValue && !taskValue.value) emit('update:modelValue', oldValue.value)
	else oldValue.value = taskValue.value
})
</script>

<style scoped></style>
