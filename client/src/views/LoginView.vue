<template>
	<div>
		<h1 class="text-3xl font-bold text-blue-600">LOGIN</h1>
		<div class="flex justify-center">
			<div class="w-full max-w-xs">
				<form
					@submit.prevent="login"
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div class="mb-6">
						<div class="relative">
							<div class="relative">
								<input
									v-model="user.username"
									type="text"
									id="username"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
								/>
								<label
									for="username"
									class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>Username</label
								>
							</div>
						</div>
					</div>
					<div class="mb-6">
						<div class="relative">
							<div class="relative">
								<input
									v-model="user.password"
									type="password"
									id="password"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
								/>
								<label
									for="password"
									class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>Password</label
								>
							</div>
						</div>
					</div>
					<div 
					v-if="errorMessage"
					class="flex gap-2 justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-red-600"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#000000"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polygon
									points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
								></polygon>
								<line x1="12" y1="8" x2="12" y2="12"></line>
								<line x1="12" y1="16" x2="12.01" y2="16"></line>
							</svg>
							<p class="text-red-600">Invalid Username or Email.</p>
						</div>
					<div class="flex-col items-center">
						<button
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
							type="submit"
						>
							Log in
						</button>
						<div for="terms" class="mt-5 text-sm font-medium text-gray-900">
							Don't have an account?
							<router-link
								to="/signup"
								class="text-blue-600 hover:underline hover:cursor-pointer"
								>Sign up</router-link
							>
						</div>
					</div>
				</form>
				<p class="text-center text-gray-500 text-xs">
					&copy;2023 Feathers Playground
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'LoginView',
	data: () => ({
		user: {
			username: undefined,
			password: undefined,
		},
		errorMessage: undefined,
	}),
	methods: {
		...mapActions('auth', ['authenticate']),
		login() {
			this.authenticate({
				strategy: 'local',
				...this.user, // use spread operator to get user credentials
			})
				.then(() => {
					this.errorMessage = false;
					this.$router.push('./messages');
				})
				.catch((error) => {
					// Show login page (potentially with `e.message`)
					console.error('Authentication error', error);
					this.errorMessage = true;
				});
		},
	},
};
</script>
