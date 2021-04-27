<template>
	<div id="app">
		<div class="app-content">
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link> |
				<router-link to="/person">Author</router-link>
				<h2 class="title">
					{{ $route.meta.title }}
				</h2>
			</div>
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data: () => ({
		message: 'Message',
	}),
};
</script>

<style lang="scss">
body {
	display: block;
	margin: 0;
	width: 100vw;
	height: 100vh;
	background: #42b983;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-start;
	justify-content: center;

	padding: 30px;
	height: 100%;
	.app-content {
		display: flex;
		flex-flow: column nowrap;
		margin-top: 6vh;
		height: auto;
		width: 100%;
		max-width: 600px;
		background: white;
		border-radius: 16px;
		padding: 16px;

		#nav {
			a {
				font-weight: bold;
				color: #2c3e50;

				&.router-link-exact-active {
					color: #42b983;
				}
			}
		}
	}
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
