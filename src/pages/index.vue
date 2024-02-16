<template>
	<div class="h-screen flex items-center justify-center">
        <draggable 
            :list="test" 
            group="name" 
            @start="drag = true" 
            @end="drag = false" 
            item-key="id">
            <template #item="{element}">
                <div>{{element.name}}</div>
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
    import draggable from 'vuedraggable'

    const drag = ref<boolean>(false)

    const test = reactive([
        {
            id: 1,
            name: 'teste 1'
        },
        {
            id: 2,
            name: 'teste 2'
        },
        {
            id: 3,
            name: 'teste 3' 
        },
        {
            id: 4,
            name: 'teste 4'
        },
        {
            id: 5,
            name: 'teste 5'
        },
        {
            id: 6,
            name: 'teste 6'
        },
    ])
</script>
<style scoped></style>
