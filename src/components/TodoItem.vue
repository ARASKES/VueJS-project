<template>
	<li>
		<input type="checkbox" @input="toggleStatus"
			:checked="todo.isCompleted" />

		<span :class="{ done: todo.isCompleted }"> {{ todo.title }} </span>

		<button @click="onRemoveClicked" class="remove-button">
			x
		</button>
	</li>
</template>

<script>
import { deleteTodoById, patchTodo } from '@/service/dataService'

export default {
	name: 'TodoItem',

	props: {
		todo: {
			type: Object,
			required: true,
		},
	},

	methods: {
		async toggleStatus() {
			const updatedTodo = await patchTodo({
				id: this.todo.id,
				isCompleted: !this.todo.isCompleted
			});
			this.todo.isCompleted = Boolean(updatedTodo?.isCompleted);
		},

		async onRemoveClicked() {
			const response = await deleteTodoById(this.todo.id);
			if (response) {
				this.$emit('refresh');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
li {
	border-radius: 12px;
	border: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 22px;
	margin-bottom: 1rem;
}

.remove-button {
	background: red;
	color: #fff;
	border-radius: 50%;
	font-weight: bold;
	outline: none;
	height: 25px;
}

input {
	margin-right: 1rem;
}

.done {
	text-decoration: line-through;
}
</style>
