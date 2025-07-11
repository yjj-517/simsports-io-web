// simdunk路由
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
				path: "/simdunk/simdunk-player",
				element: lazyLoad(React.lazy(() => import("@/views/simdunk/simdunk-player/home/index"))),
				meta: {
					title: "simdunk-simdunk-player",
					isRoot: true,
				},
			},
			{
				path: "/simdunk/simdunk-player/:id",
				element: lazyLoad(
					React.lazy(() => import("@/views/simdunk/simdunk-player/setting-simdunk-player/index")),
				),
				meta: {
					title: "simdunk-simdunk-player-setting",
					isRoot: true,
				},
			},
		],
	},
];

export default arrsRouter;
