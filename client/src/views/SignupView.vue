<template>
	<div>
		<h1 class="text-3xl font-bold text-blue-600">SIGN UP</h1>
		<div class="flex justify-center">
			<div class="w-full max-w-xs">
				<form
					@submit.prevent="signUp"
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div class="mb-4">
						<div class="relative">
							<div class="relative">
								<input
									type="text"
									id="username"
									v-model="user.username"
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
									type="text"
									id="email"
									v-model="user.email"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
								/>
								<label
									for="email"
									class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>Email</label
								>
							</div>
						</div>
					</div>
					<div class="mb-6">
						<div class="relative">
							<div class="relative">
								<input
									type="password"
									id="password"
									v-model="user.password"
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
					<!--
					<div class="mb-6">
						<div class="relative">
							<div class="relative">
								<input
									type="password"
									id="confirm_password"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
								/>
								<label
									for="confirm_password"
									class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>Confirm Password</label
								>
							</div>
						</div>
					</div>
					-->
					<div class="flex-col items-center">
						<button
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
							type="submit"
						>
							Sign up
						</button>
						<div for="terms" class="mt-5 text-sm font-medium text-gray-900">
							Already have an account?
							<router-link
								to="/"
								class="text-blue-600 hover:underline hover:cursor-pointer"
								>Log in</router-link
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
	name: 'SignupView',
	data: () => ({
		user: {
			username: undefined,
			email: undefined,
			password: undefined,
		},
	}),
	methods: {
		...mapActions('auth', ['authenticate']),
		login() {
			this.authenticate({
				strategy: 'local',
				...this.user, // use spread operator to get user credentials
			}).then(() => {
				this.$router.push('./messages');
			});
		},
		signUp() {
			const { User } = this.$FeathersVuex;
			const user = new User(this.user);
			user.save().then(() => {
				this.login();
			});
		},
	},
};
</script>
