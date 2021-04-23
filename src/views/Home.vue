<template>
  <div class="home-page">
    <CreateTodo @create-todo="onSubmitClicked" />
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <TodoList v-else-if="todoList && todoList.length" :todoList="todoList" @remove-todo="onRemoveClicked" />
    <div v-else>
      Ваш список дел пуст!
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import CreateTodo from '@/components/CreateTodo';
export default {
  name: 'Home',
  components: {
    CreateTodo,
    TodoList
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
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        this.todoList = await response.json();
      } catch (exception) {

      } finally {
        this.loading = false;
      }
    },

    onSubmitClicked(todo) {
      if(!todo.id)
      {
        todo.id = this.todoList.length
      }
      this.todoList.push(todo);
    },

    onRemoveClicked(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
    }
  },
};
</script>

<style></style>template
