<template>
	<div>
		<h1 class="text-3xl font-bold text-blue-600">SIGN UP</h1>
		<div class="flex justify-center">
			<div class="w-full max-w-xs">
				<form
					@submit.prevent="signUp"
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<!-- USERNAME BEGIN -->
					<div class="mb-4" v-if="!duplicateUsername">
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
						<div v-if="!validUsername" class="flex gap-1 justify-center">
							<p class="text-orange-600">Invalid Username.</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-orange-600 flex self-center hover:cursor-pointer"
								width="18"
								height="18"
								viewBox="0 0 30 30"
								fill="none"
								stroke="#000000"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
								<line x1="12" y1="17" x2="12.01" y2="17"></line>
							</svg>
						</div>
					</div>
					<div class="mb-4" v-else>
						<div class="relative">
							<div class="relative">
								<input
									type="text"
									id="username"
									v-model="user.username"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
									placeholder=" "
								/>
								<label
									for="username"
									class="absolute text-sm text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>Username</label
								>
							</div>
						</div>
						<div class="flex gap-2 justify-center">
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
							<p class="text-red-600">Username already exists.</p>
						</div>
						<div v-if="!validUsername" class="flex gap-1 justify-center">
							<p class="text-orange-600">Invalid Username.</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-orange-600 flex self-center hover:cursor-pointer"
								width="18"
								height="18"
								viewBox="0 0 30 30"
								fill="none"
								stroke="#000000"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
								<line x1="12" y1="17" x2="12.01" y2="17"></line>
							</svg>
						</div>
					</div>
					<!-- USERNAME END -->

					<!-- EMAIL BEGIN -->
					<div class="mb-6" v-if="!duplicateEmail">
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
						<div v-if="!validEmail" class="flex gap-1 justify-center">
							<p class="text-orange-600">Invalid Email.</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-orange-600 flex self-center hover:cursor-pointer"
								width="18"
								height="18"
								viewBox="0 0 30 30"
								fill="none"
								stroke="#000000"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
								<line x1="12" y1="17" x2="12.01" y2="17"></line>
							</svg>
						</div>
					</div>
					<div class="mb-6" v-else>
						<div class="relative">
							<div class="relative">
								<input
									type="text"
									id="email"
									v-model="user.email"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
									placeholder=" "
								/>
								<label
									for="email"
									class="absolute text-sm text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>Email</label
								>
							</div>
						</div>
						<div class="flex gap-2 justify-center">
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
							<p class="text-red-600">Email already exists.</p>
						</div>
						<div v-if="!validEmail" class="flex gap-1 justify-center">
							<p class="text-orange-600">Invalid Email.</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-orange-600 flex self-center hover:cursor-pointer"
								width="18"
								height="18"
								viewBox="0 0 30 30"
								fill="none"
								stroke="#000000"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
								<line x1="12" y1="17" x2="12.01" y2="17"></line>
							</svg>
						</div>
					</div>
					<!-- EMAIL END -->
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
							v-bind:disabled="isButtonDisabled"
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
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
	data() {
		return {
			user: {
				username: undefined,
				email: undefined,
				password: undefined,
			},
			duplicateEmail: undefined,
			duplicateUsername: undefined,
			validUsername: true,
			validEmail: true,
			isButtonDisabled: false,
			usernamePattern: /users.users_username_unique/i,
			emailPattern: /users.users_email_unique/i,
		};
	},
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
			user
				.save()
				.then(() => {
					this.login();
				})
				.catch((error) => {
					if (error.message.match(this.usernamePattern)) {
						this.duplicateUsername = true;
					} else {
						this.duplicateUsername = false;
					}
					if (error.message.match(this.emailPattern)) {
						this.duplicateEmail = true;
					} else {
						this.duplicateEmail = false;
					}
				});
		},
		checkValidation() {
			if (this.validUsername === true && this.validEmail === true) {
				this.isButtonDisabled = false;
			} else {
				this.isButtonDisabled = true;
			}
		},
		validateUserRules(value) {
			if (/^[A-Za-z][0-9a-zA-Z]{3,11}$/i.test(value)) {
				this.validUsername = true;
			} else {
				this.validUsername = false;
			}
		},
		validateEmailRules(value) {
			if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
				this.validEmail = true;
			} else {
				this.validEmail = false;
			}
		},
	},
	watch: {
		'user.username'(value) {
			this.user.username = value;
			this.validateUserRules(value);
			this.checkValidation()
		},
		'user.email'(value) {
			this.user.email = value;
			this.validateEmailRules(value);
			this.checkValidation()
		},
	},
};
</script>
