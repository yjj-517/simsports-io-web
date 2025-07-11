// 登录路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/user",
		name: "user",
		redirect: "/user/welcome", //重定向
		meta: {
			title: "user", //名字
			isRoot: false, //路由限制
			menuNum: 16, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "user_welcome",
				path: "/user/welcome",
				meta: {
					title: "user_welcome",
					isRoot: false,
				},
				component: () => import("@/view/User/Welcome/index.vue"),
			},
			{
				name: "user_login",
				path: "/user/login",
				meta: {
					title: "user_login",
					isRoot: false,
				},
				component: () => import("@/view/User/Login/index.vue"),
			},
			{
				name: "user_logon",
				path: "/user/logon",
				meta: {
					title: "user_logon",
					isRoot: false,
				},
				component: () => import("@/view/User/Logon/index.vue"),
			},
			{
				name: "user_recover",
				path: "/user/recover",
				meta: {
					title: "user_recover",
					isRoot: false,
				},
				component: () => import("@/view/User/Recover/index.vue"),
			},
		],
	},
];

export default routes;
