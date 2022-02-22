import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
	// 路由重定向
	{
		path: '/',
		redirect: '/home',
		component: () => import("@/pages/home/Index.vue")
	},
	{
		path: '/home',
		// component: Home
		component: () => import("@/pages/home/Index.vue")
	},

]