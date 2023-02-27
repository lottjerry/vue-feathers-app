<template>
	<div class="flex justify-center">
		<div
			class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full flex-col gap-4 border justify-center"
		>
			<h1 class="text-3xl font-bold text-blue-600 p-6 underline">My Profile</h1>
			<div class="mb-6 p-3 flex justify-center">
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
			<div class="mb-6 flex justify-center">
				<div class="relative flex gap-4" v-for="user in users" :key="user.id">
					<div class="flex self-center">Email:</div>
					<div v-if="!emailEdit" class="">
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
			<!-- PROMPT DELTE -->
			<div
				class="flex justify-center p-5"
				v-if="promptDelete && !(usernameEdit || emailEdit)"
			>
				<div class="flex flex-col gap-5" v-for="user in users" :key="user.id">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-red-600 self-center"
						width="40"
						height="40"
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
					<h1 class="text-red-600 text-l">
						Are you sure you want to delete your account ?
					</h1>
					<div class="flex gap-5 justify-center">
						<button
							@click="deleteUser(user.id)"
							class="border-2 border-green-600 bg-white hover:bg-green-600 text-green-600 hover:text-white font-bold py-1 px-2 w-20 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
						>
							Yes
						</button>
						<button
							@click="cancelDelete()"
							class="border-2 border-red-600 bg-white hover:bg-red-600 text-red-600 hover:text-white font-bold py-1 px-2 w-20 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
						>
							No
						</button>
					</div>
				</div>
			</div>
			<!-- END PROMPT DELETE -->
			<div v-if="!promptDelete">
				<button
					v-if="!(usernameEdit || emailEdit)"
					@click="deletePrompt()"
					class="border-2 border-red-600 bg-white hover:bg-red-600 text-red-600 hover:text-white font-bold py-1 px-2 rounded hover:cursor-pointer focus:outline-none focus:shadow-outline transition ease-in-out mx-10 my-16"
				>
					Delete Account
				</button>
			</div>
			<!-- User Update buttons -->
			<div v-if="usernameEdit || emailEdit">
				<div
					class="flex justify-center gap-5 mx-5 my-16"
					v-for="user in users"
					:key="user.id"
				>
					<button
						@click="updateUser(user.id)"
						class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 rounded hover:cursor-pointer focus:outline-none focus:shadow-outline transition ease-in-out"
					>
						Update
					</button>
					<button
						@click="cancelUpdate()"
						class="border-2 border-red-600 bg-white hover:bg-red-600 text-red-600 hover:text-white font-bold py-1 px-2 rounded hover:cursor-pointer focus:outline-none focus:shadow-outline transition ease-in-out"
					>
						Cancel
					</button>
				</div>
			</div>
			<!-- End User Update Buttons -->
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
		promptDelete: false,
	}),
	mounted() {
		this.findUsers({ query: {} });
		this.findMessages({ query: {} });
	},
	methods: {
		...mapActions('messages', { findMessages: 'find' }),
		...mapActions('users', { findUsers: 'find' }),
		deleteUser(userId) {
			for (const message of this.messages) {
				message.remove();
			}
			const { User } = this.$FeathersVuex;
			const user = new User({ id: userId });
			user.remove().then(() => {
				this.$router.go('/');
			});
		},
		updateUser(userId) {
			const { User } = this.$FeathersVuex;
			const user = new User({ id: userId });
			if (this.newUsername != '') {
				user.username = this.newUsername;
			}
			if (this.newEmail != '') {
				user.email = this.newEmail;
			}
			user.save().then(() => {
				this.cancelUpdate();
				alert('Account updated Successfully!');
			});
		},
		toggleUsernameEdit() {
			this.usernameEdit = true;
			this.promptDelete = false;
		},
		toggleEmailEdit() {
			this.emailEdit = true;
			this.promptDelete = false;
		},
		cancelUsernameEdit() {
			this.newUsername = '';
			this.usernameEdit = false;
		},
		cancelEmailEdit() {
			this.newEmail = '';
			this.emailEdit = false;
		},
		deletePrompt() {
			this.promptDelete = true;
		},
		cancelDelete() {
			this.promptDelete = false;
		},
		cancelUpdate() {
			this.cancelUsernameEdit();
			this.cancelEmailEdit();
		},
	},
	computed: {
		...mapGetters('messages', { findMessagesInStore: 'find' }),
		messages() {
			return this.findMessagesInStore({ query: {} }).data;
		},
		...mapGetters('users', { findUsersInStore: 'find' }),
		users() {
			return this.findUsersInStore({ query: {} }).data;
		},
	},
};
</script>
