export const routes = [
	// 路由重定向
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		// component: Home
		component: () => import("@/pages/home/Index.vue")
	},
	// {
	// 	path: '/about',
	// 	component: () => import("@modules/about/Index.vue")
	// }
]