// NFT买卖路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/asset",
		name: "asset",
		redirect: "/asset", //重定向
		meta: {
			title: "asset", //名字
			isRoot: true, //路由限制
			menuNum: 8, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "asset",
				path: "/asset",
				meta: {
					title: "asset",
					isRoot: true,
				},
				component: () => import("@/view/Asset/index.vue"),
			},
			{
				name: "asset-setprice",
				path: "/asset/setprice",
				meta: {
					title: "asset",
					isRoot: true,
				},
				component: () => import("@/view/Asset/SetPrice/index.vue"),
			},
		],
	},
];

export default routes;
