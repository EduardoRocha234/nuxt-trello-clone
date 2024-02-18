<template>
	<div>
		<input
			ref="inputRef"
			v-model="value"
			:type="type"
			:placeholder="placeholder"
			class="w-full placeholder-gray-400  rounded-md px-2 text-sm py-1 bg-transparent reset focus:bg-slate-500 outline-none focus:border-2 focus:border-zinc-400 transition-colors"
			@focus="onFocusHandler"
			@blur="onFocusHandler"
		/>
	</div>
</template>

<script setup lang="ts">
    import type { InputTypeHTMLAttribute } from 'vue'

	const props = withDefaults(defineProps<{
        modelValue?: string
        type?: InputTypeHTMLAttribute
        placeholder?: string
    }>(), {
		modelValue: '',
		type: 'text',
		placeholder: undefined,
	})

	const { type, placeholder } =
		toRefs(props)

	const emit = defineEmits<{
		(event: 'update:modelValue', value: string): void
	}>()

	const value = computed({
		get: () => props.modelValue,
		set: (value) => emit('update:modelValue', value),
	})

	const inputRef = ref<HTMLInputElement | null>(null)

	const inputIsFocused = ref(false)

	const onFocusHandler = (event: FocusEvent) => {
		if (event?.type === 'focus') inputIsFocused.value = true
		else if (event?.type === 'blur') inputIsFocused.value = false
	}
</script>

<style scoped>
	input.reset:-webkit-autofill,
	input.reset:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 30px #f3f4f6 inset !important;
		-webkit-text-fill-color: #4b5563 !important;
	}
</style>
