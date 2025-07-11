// NFT路由
import { RouteRecordRaw } from "vue-router";
import Layout from "@/view/Layout/index.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/nft",
		name: "nft",
		redirect: "/nft/market", //重定向
		meta: {
			title: "nft", //名字
			isRoot: false, //路由限制
			menuNum: 3, //路由排序
		},
		component: Layout, //头部导航
		children: [
			{
				name: "nft_blindbox",
				path: "/nft/blindbox",
				meta: {
					title: "nft_blindbox",
					isRoot: false,
				},
				component: () => import("@/view/Nft/Blindbox/index.vue"),
			},
			{
				name: "nft_market",
				path: "/nft/market",
				meta: {
					title: "nft_market",
					isRoot: false,
				},
				component: () => import("@/view/Nft/Market/index.vue"),
			},
			{
				name: "nft_illustratedbook",
				path: "/nft/illustratedbook",
				meta: {
					title: "nft_illustratedbook",
					isRoot: false,
				},
				component: () => import("@/view/Nft/Illustratedbook/index.vue"),
			},
		],
	},
];

export default routes;
