<template>
	<div class="home-page">
		<CreateTodo
			@create-todo="onSubmitClicked"
			@refresh="fetchTodos"
		/>
		<div v-if="loading" class="loading">
			Loading...
		</div>
		<TodoList
			v-else-if="todoList && todoList.length"
			:todoList="todoList"
			@refresh="fetchTodos"
		/>
		<div v-else>
			Ваш список дел пуст!
		</div>
	</div>
</template>

<script>
import TodoList from '@/components/TodoList';
import CreateTodo from '@/components/CreateTodo';
import { fetchTodos } from '@/service/dataService';

export default {
	name: 'Home',

	components: {
		CreateTodo,
		TodoList,
	},

	data: () => ({
		todoList: [],
		loading: false,
	}),

	mounted() {
		this.fetchTodos();
	},

	methods: {
		async fetchTodos() {
			try {
				this.loading = true;
				this.todoList = await fetchTodos();
			} catch (exception) {
			} finally {
				this.loading = false;
			}
		},

		onSubmitClicked(todo) {
			this.todoList.push(todo);
		},
	},
};
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
}
</style>
