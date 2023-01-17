<template>
	<div id="app">
		<nav>
			<div v-if="!user">
				<router-link to="/">Login</router-link> |
				<router-link to="/signup">Signup</router-link>
			</div>
			<div v-if="user">
				<h1>Logged In</h1>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	name: 'App',
	mounted() {
		this.authenticate() // authenticate using the existing jwt
			.then(() => {
				this.$router.push('./tasks');
			})
			.catch(() => {});
	},
	computed: {
		...mapState('auth', { user: 'payload' }),
	},
	methods: {
		...mapActions('auth', ['authenticate']),
	},
};
</script>
