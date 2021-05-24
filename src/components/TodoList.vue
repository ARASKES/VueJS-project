<template>
	<ul class="list-content">
		<TodoItem
			v-for="todo in todoList"
			:key="todo.id"
			:todo="todo"
			@refresh="$emit('refresh')"
		/>
	</ul>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
	name: 'TodoList',

	props: {
		todoList: {
			type: Array,
			required: true,
		},
	},
	
	components: {
		TodoItem,
	},
};
</script>

<style lang="scss">
.list-content {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    padding: 0;
}
</style>
