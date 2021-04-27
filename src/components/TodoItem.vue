<template>
	<li>
		<input type="checkbox" @change="todo.completed = !todo.completed" />

		<span :class="{ done: todo.completed }">{{ todo.title }} </span>
		<button @click="$emit('remove-todo', todo.id)" class="remove-button">
			x
		</button>
	</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		todo: {
			type: Object,
			required: true,
		},
	},
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
