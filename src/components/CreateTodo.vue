<template>
	<div class="wrapper">
		<input type="text" v-model="title" />
		<button @click="onSubmitClicked">Создать todo</button>
	</div>
</template>

<script>
export default {
	name: 'CreateTodo',
	data: () => ({
		title: '',
	}),
	methods: {
		onSubmitClicked() {
			if (this.title !== '') {
				this.$emit('create-todo', {
					id: Date.now(),
                    title: this.title,
                    completed: false,
				});
				this.title = '';
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
}
</style>
