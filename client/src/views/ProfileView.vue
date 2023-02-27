<template>
	<div class="flex justify-center">
		<div
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full flex-col gap-4"
		>
				<h1 class="text-3xl font-bold text-blue-600 p-5 underline">My Profile</h1>
			<div class="mb-6 p-3">
				<div class="relative flex gap-2" v-for="user in users" :key="user.id">
					<div class="flex self-center">Username:</div>
					<div v-if="!usernameEdit" class="mx-4 mr-16">
						{{ user.username }}
					</div>
					<div class="relative" v-else>
						<input
							v-model="newUsername"
							type="text"
							id="username"
							class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label
							for="username"
							class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
							>New Username</label
						>
					</div>
					<svg
						v-if="!usernameEdit"
						@click="toggleUsernameEdit()"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-blue-600 hover:cursor-pointer flex self-center"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
					</svg>
					<svg
						v-else
						@click="cancelUsernameEdit()"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-red-600 hover:cursor-pointer flex self-center"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</div>
			</div>
			<div class="mb-6 p-3">
				<div class="relative flex gap-2" v-for="user in users" :key="user.id">
					<div class="flex self-center">Email:</div>
					<div v-if="!emailEdit" class="mx-4 ml-12">
						{{ user.email }}
					</div>
					<div class="relative ml-8" v-else>
						<input
							v-model="newEmail"
							type="email"
							id="email"
							class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
						/>
						<label
							for="email"
							class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
							>New Email</label
						>
					</div>
					<svg
					v-if="!emailEdit"
					@click="toggleEmailEdit()"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-blue-600 hover:cursor-pointer flex self-center"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
					</svg>
					<svg
					v-else
					@click="cancelEmailEdit()"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-red-600 hover:cursor-pointer flex self-center"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'ProfileView',
	data: () => ({
		newUsername: '',
		newEmail: '',
		usernameEdit: false,
		emailEdit: false,
	}),
	mounted() {
		this.findUsers({ query: {} });
	},
	methods: {
		...mapActions('users', { findUsers: 'find' }),
		deleteUser(userId) {
			const { User } = this.$FeathersVuex;
			const user = new User({ id: userId });
			user.remove();
		},
		updateUser(userId) {
			const { User } = this.$FeathersVuex;
			const user = new User({ id: userId });
			user.username = this.newUsername;
			user.save().then(() => {
				this.selected = '';
				this.newUsername = '';
			});
		},
		toggleUsernameEdit() {
			this.usernameEdit = true;
		},
		toggleEmailEdit() {
			this.emailEdit = true;
		},
		cancelUsernameEdit() {
			this.newUsername = '';
			this.usernameEdit = false;
		},
		cancelEmailEdit() {
			this.newEmail = '';
			this.emailEdit = false;
		},
	},
	computed: {
		...mapGetters('users', { findUsersInStore: 'find' }),
		users() {
			return this.findUsersInStore({ query: {} }).data;
		},
	},
};
</script>
