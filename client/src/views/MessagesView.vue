<template>
	<div>
		<div class="flex justify-center">
			<div class="w-full max-w-xl">
				<form
					@submit.prevent="createMessage"
					class="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4"
				>
					<div class="mb-6" v-if="validMessage">
						<div class="relative">
							<div class="relative">
								<input
									v-model="message.messageBody"
									type="text"
									id="messageBody"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
								/>
								<label
									for="messageBody"
									class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>New Message</label
								>
							</div>
						</div>
					</div>
					<div class="mb-6" v-else>
						<div class="relative">
							<div class="relative">
								<input
									v-model="message.messageBody"
									type="text"
									id="messageBody"
									class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
									placeholder=" "
								/>
								<label
									for="messageBody"
									class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
									>New Message</label
								>
							</div>
						</div>
					</div>
					<div v-if="!validMessage" class="flex gap-1 justify-center mb-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="stroke-orange-400"
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
						<p class="text-orange-600">Message can't be empty.</p>
					</div>
					<div class="flex flex-col items-center gap-5">
						<button
							v-bind:disabled="isButtonDisabled"
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
							type="submit"
						>
							Create Message
						</button>
					</div>
				</form>
			</div>
		</div>
		<div class="border-2 border-black my-2 mx-40 rounded-lg overflow-auto h-96">
			<div
				class="flex border-2 border-gray-300 p-2 rounded-lg my-4 mx-10 hover:border-blue-600 cursor-pointer transition ease-in-out"
				v-for="message in messages"
				:key="message.id"
			>
				<p
					v-if="!(selected === message.id)"
					class="flex self-center text-black m-auto justify-start"
				>
					{{ message.messageBody }}
				</p>
				<div
					v-if="selected === message.id"
					class="flex self-center text-blue-600 m-auto justify-start"
				>
					<div class="relative">
						<div class="relative">
							<input
								v-model="newMessage"
								type="text"
								id="updateMessageBody"
								class="block px-40 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								placeholder=" "
							/>
							<label
								for="updateMessageBody"
								class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
								>Update Message</label
							>
						</div>
					</div>
				</div>
				<div v-if="!(selected === message.id)" class="flex gap-5">
					<svg
						@click="toggleEdit(message.id)"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-blue-600 hover:cursor-pointer flex self-center"
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
					</svg>

					<svg
						@click="deleteMessage(message.id)"
						class="hover:stroke-red-600 hover:cursor-pointer flex self-center"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="3 6 5 6 21 6"></polyline>
						<path
							d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
						></path>
						<line x1="10" y1="11" x2="10" y2="17"></line>
						<line x1="14" y1="11" x2="14" y2="17"></line>
					</svg>
				</div>
				<div v-if="selected === message.id" class="flex gap-5">
					<svg
						@click="updateMessage(message.id)"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-green-600 hover:cursor-pointer flex self-center"
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					<svg
						@click="cancelEdit()"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:stroke-red-600 hover:cursor-pointer flex self-center"
						width="30"
						height="30"
						viewBox="0 0 30 30"
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
		<button
		v-if="this.messages.length"
			@click="deleteWarn()"
			class="border-2 border-red-600 bg-white hover:bg-red-600 text-red-600 hover:text-white font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
		>
			Delete All
		</button>
		<button
		v-else
			class="border-2 border-gray-400 bg-gray-400 hover:cursor-not-allowed text-gray-500 font-bold py-1 px-8 rounded"
		>
			Delete All
		</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'MessagesView',
	data: () => ({
		message: {
			messageBody: '',
		},
		newMessage: '',
		edit: false,
		selected: '',
		validMessage: true,
		isButtonDisabled: true,
	}),
	mounted() {
		this.findMessages({ query: {} });
		this.findUsers({ query: {} });
	},
	methods: {
		...mapActions('messages', { findMessages: 'find' }),
		...mapActions('users', { findUsers: 'find' }),
		createMessage() {
			const { Message } = this.$FeathersVuex;
			const message = new Message(this.message);
			message.save().then(() => {
				message.messageBody = undefined;
			});
		},
		deleteMessage(messageId) {
			const { Message } = this.$FeathersVuex;
			const message = new Message({ id: messageId });
			message.remove();
		},
		deleteAllMessages() {
			for (const message of this.messages) {
				message.remove();
			}
		},
		updateMessage(messageId) {
			const { Message } = this.$FeathersVuex;
			const message = new Message({ id: messageId });
			message.messageBody = this.newMessage;
			message.save().then(() => {
				this.selected = '';
				this.newMessage = '';
			});
		},
		toggleEdit(messageId) {
			const { Message } = this.$FeathersVuex;
			const message = new Message({ id: messageId });
			this.selected = message.id;
			this.edit = true;
			this.newMessage = '';
		},
		cancelEdit() {
			this.selected = '';
			this.newMessage = '';
		},
		validateMessageRules(value) {
			if (/^.+/.test(value)) {
				this.validMessage = true;
			} else {
				this.validMessage = false;
			}
		},
		checkValidation() {
			if (this.validMessage === true && this.message.messageBody != undefined) {
				this.isButtonDisabled = false;
			} else {
				this.isButtonDisabled = true;
			}
		},
		deleteWarn() {
			this.$swal({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete all messages!',
			}).then((result) => {
				if (result.isConfirmed) {
					this.deleteAllMessages();
					this.$swal('Deleted!', 'Your messages has been deleted.', 'success');
				}
			});
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
	watch: {
		'message.messageBody'(value) {
			this.message.messageBody = value;
			this.validateMessageRules(value);
			this.checkValidation();
		},
	},
};
</script>
