<template>
	<div>
		<h1>Messages</h1>
		<p>{{ messages }}</p>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'MessagesView',
	mounted () {
		this.findMessages({query:{}})
		.then(response => {
			const messages = response.data || response;
			return messages;
		})
	},
	methods: {
		...mapActions('messages', { findMessages: 'find' })
	},
	computed: {
		...mapGetters('messages', { findMessagesInStore: 'find' }),
		messages() {
			return this.findMessagesInStore({ query: {} }).data;
		},
	},
};
</script>
