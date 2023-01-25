import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathersClient from '../fathers-client';

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, {
	idField: '_id',
});

Vue.use(Vuex);
Vue.use(FeathersVuex);

export default new Vuex.Store({
	plugins: [
		// Create user with the user service then call auth on that user
		service('users'),
		service('messages'),
		// Setup the auth plugin.
		auth({ userService: 'users' }),
	],
});
