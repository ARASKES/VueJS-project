<template>
	<div class="wrapper" @keyup.enter="onSubmitClicked">
		<input type="text" v-model="title" />
		<button @click="onSubmitClicked">Создать todo</button>
		<button class="remove-all-button" @click="onRemoveAllClicked">Удалить все todo</button>
	</div>
</template>

<script>
import { createTodo, deleteTodos } from '@/service/dataService';

export default {
	name: 'CreateTodo',
	data: () => ({
		title: '',
	}),
	methods: {
		async onSubmitClicked() {
			if (this.title !== '') {
				const createdTodo = await createTodo({title: this.title});
				this.$emit('create-todo', createdTodo);
				this.title = '';
			}
		},

		async onRemoveAllClicked() {
			const response = await deleteTodos();
			if (response) {
				this.$emit('refresh');
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-flow: row;
	width: 100%;
	justify-content: center;
	margin-bottom: 50px;
	input {
		width: 150px;
	}
	button {
		padding: 8px 22px;
		font-size: 14px;
		border-radius: 12px;
		border: 0;
		outline: none;
		white-space: nowrap;
		background: #42b983;
		color: white;
		cursor: pointer;
		margin-left: 20px;
	}
	.remove-all-button {
		padding: 8px 22px;
		font-size: 14px;
		border-radius: 12px;
		border: 0;
		outline: none;
		white-space: nowrap;
		background: #c22621;
		color: white;
		cursor: pointer;
		margin-left: 20px;
	}
}
</style>
