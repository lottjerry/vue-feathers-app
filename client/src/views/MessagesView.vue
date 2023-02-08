<template>
	<div>
		<div class="flex justify-center">
			<div class="w-full max-w-xl">
				<form
					@submit.prevent="createMessage"
					class="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4"
				>
					<div class="mb-6">
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
									>Message</label
								>
							</div>
						</div>
					</div>
					<div class="flex-col items-center">
						<button
							class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
							type="submit"
						>
							Create Message
						</button>
					</div>
				</form>
			</div>
		</div>
		<h1 class="bold">Messages</h1>
		<p>{{ messages }}</p>
		<!--
		<div class="border-2 border-black my-2 mx-40 rounded-lg overflow-auto h-96">
			<div
				class="flex border-2 border-gray-300 p-2 rounded-lg my-4 mx-10 hover:border-blue-600 cursor-pointer transition ease-in-out"
				v-for="message in fetchMessages"
				:key="message.id"
			>
				<p class="flex self-center text-blue-600 m-auto justify-start">
					{{ message.messageBody }}
				</p>
				<div class="flex gap-2">
					<button
						class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
						type="submit"
					>
						Update
					</button>
					<button
						class="border-2 border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition ease-in-out"
						type="submit"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
		 -->
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'MessagesView',
	data: () => ({
		message: {
			messageBody: '',
		}
	}),
	mounted() {
		this.findMessages({ query: {} }).then((response) => {
			const messages = response.data || response;
			return messages;
		});
	},
	methods: {
		...mapActions('messages', { findMessages: 'find' }),
		createMessage() {
			const { Message } = this.$FeathersVuex;
			const message = new Message(this.message);
			message.save().then(() => {
				message.messageBody = '';
			});
		},
	},
	computed: {
		...mapGetters('messages', { findMessagesInStore: 'find' }),
		messages() {
			return this.findMessagesInStore({ query: {} }).data;
		},
	},
};
</script>
