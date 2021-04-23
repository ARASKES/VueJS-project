<template>
    <ul class="list-content">
        <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo" @remove-todo="onRemoveClicked" />
    </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
    name: "TodoList",
    props: {
        todoList: {
            type: Object,
            required: true,
        }
    },
    components: {
        TodoItem
    },
    methods: {
        onRemoveClicked(id) {
            this.$emit("remove-todo", id)
        }
    }
};
</script>

<style lang="scss">
.todo-list {
    ul {
        max-height: 600px;
        overflow-y: scroll;
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
</style>
