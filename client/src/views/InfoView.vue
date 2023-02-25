<template>
	<div>hey</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'InfoView',
	data: () => ({
		newUsername: '',
		newEmail: '',
		edit: false,
		selected: '',
	}),
	mounted() {
		this.findUsers({ query: {} });
	},
	methods: {
		...mapActions('users', { findUsers: 'find' }),
		deleteMessage(messageId) {
			const { Message } = this.$FeathersVuex;
			const message = new Message({ id: messageId });
			message.remove();
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
	},
	computed: {
		...mapGetters('users', { findUsersInStore: 'find' }),
		users() {
			return this.findUsersInStore({ query: {} }).data;
		},
	},
};
</script>
