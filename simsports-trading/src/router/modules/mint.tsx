// mint路由
import React from "react";
// loading提示的加载组件
import lazyLoad from "@/router/utils/lazy-load";
// 导航路由组件
import Layout from "@/layout/index";
import { RouteObject } from "@/router/interface";

const arrsRouter: Array<RouteObject> = [
	{
		element: <Layout />, //导航
		children: [
			{
				path: "/mint/simdunk-chrono-cube",
				element: lazyLoad(React.lazy(() => import("@/views/mint/simdunk-chrono-cube"))),
				meta: {
					title: "mint-index",
					isRoot: false,
				},
			},
			{
				path: "/mint/energy-tuner-r",
				element: lazyLoad(React.lazy(() => import("@/views/mint/energy-tuner-r"))),
				meta: {
					title: "mint-index",
					isRoot: false,
				},
			},
			{
				path: "/mint/simdunk-alpha2-player-nft",
				element: lazyLoad(React.lazy(() => import("@/views/mint/genesis-nft"))),
				meta: {
					title: "mint-index",
					isRoot: false,
				},
			},
			// {
			// 	path: "/mint/energy-tuner-m",
			// 	element: lazyLoad(React.lazy(() => import("@/views/mint/energy-tuner-m"))),
			// 	meta: {
			// 		title: "mint-index",
			// 		isRoot: false,
			// 	},
			// },
		],
	},
];

export default arrsRouter;
