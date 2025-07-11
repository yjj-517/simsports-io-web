// 开屏页路由
import { RouteRecordRaw } from "vue-router";
// import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/index",
		name: "openscreen",
		component: () => import("@/view/Openscreen/index.vue"),
		meta: {
			title: "openscreen", //名字
			isRoot: false, //路由限制
		},
	},
];

export default routes;
