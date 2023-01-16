import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import TasksView from '../views/TasksView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/signup',
		name: 'signup',
		// route level code-splitting
		// this generates a separate chunk (signup.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "signup" */ '../views/SignupView.vue'),
	},
	{
		path: '/tasks',
		name: 'tasks',
		component: TasksView,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
