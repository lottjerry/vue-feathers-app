<template>
	<div id="app">
		<nav class="p-5">
			<div v-if="!userPayload">
				<div
					class="border-2 border-blue-600 bg-white text-blue-600 rounded-lg m-2 p-2 flex"
				>
					<img
						src="https://feathersjs.com/logo.svg"
						alt="FeathersJs"
						class="h-10"
					/>
					<div class="flex-auto p-2 flex">Feathers Playground</div>
					<div class="flex gap-2 justify-end">
						<router-link
							to="/"
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 w-20 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
							>Login</router-link
						>
						<router-link
							to="/signup"
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 w-20 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
							>Signup</router-link
						>
					</div>
				</div>
			</div>
			<div v-if="userPayload">
				<div
					class="border-2 border-blue-600 bg-white text-blue-600 rounded-lg m-2 p-2 flex"
				>
					<img
						src="https://feathersjs.com/logo.svg"
						alt="FeathersJs"
						class="h-10"
					/>
					<div class="flex-auto p-2 flex">Feathers Playground</div>
					<div class="flex gap-2 justify-end">
						<div class="group self-center">
							<a v-for="user in users"
							:key="user.id"
								class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline transition ease-in-out text-lg cursor-pointer"
								>{{ user.username }}</a
							>
							<div
								class="group-hover:block dropdown-menu absolute hidden h-auto transition ease-in-out"
							>
								<ul class="bg-white shadow px-2.5 py-8 mt-5 border-2 border-blue-600 rounded-lg blue-red-600 hover:bg-blue-600 hover:text-white">
									<li class="py-1">
										<a
											class="block font-bold text-base hover:outline-double outline-white cursor-pointer rounded-lg p-1"
											>Settings</a
										>
									</li>
									<li class="py-1">
										<a
										@click="logout"
											class="block font-bold text-base hover:outline-double outline-white cursor-pointer rounded-lg p-1"
											>Logout</a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
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

nav a.router-link-exact-active {
	--tw-text-opacity: 1;
	background: rgb(37 99 235 / var(--tw-text-opacity));
	color: white;
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
		async logout() {
			await this.authLogout();
			this.$router.go('/'); // changed .push to .go to refresh page. A quick fix because feathers does not automatically clear data.
		},
	},
};
</script>
