<template>
	<div id="app">
		<nav>
			<div v-if="!userPayload">
				<router-link to="/">Login</router-link> |
				<router-link to="/signup">Signup</router-link>
			</div>
			<div v-if="userPayload" >
				<h1 v-for="user in users" :key="user.id">
					Welcome {{ user.username }}
				</h1>
				<button
					@click="logout"
					class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
					type="button"
				>
					Logout
				</button>
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
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
	name: 'App',
	mounted() {
		this.authenticate() // authenticate using the existing jwt
			.then(() => {
				this.$router.push('./messages');
			})
			.catch(() => {});
	},
	computed: {
		...mapGetters('users', { findUsersInStore: 'find' }),
		users() {
			return this.findUsersInStore({ query: {} }).data;
		},
		...mapState('auth', { userPayload: 'payload' }),
	},
	methods: {
		...mapActions('auth', ['authenticate']),
		...mapActions('auth', { authLogout: 'logout' }),
		logout() {
			this.authLogout().then(() => this.$router.go('/')); // changed .push to .go to refresh page. A quick fix because feathers does not automatically clear data.
		},
	},
};
</script>
