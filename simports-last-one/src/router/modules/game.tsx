// game路由
import React from "react";
// loading提示的加载组件
import lazyLoad from "@/router/utils/lazy-load";
// 导航路由组件
import Layout from "@/layout/index";
import type { RouteObject } from "@/router/interface";

const ArrsRouter: Array<RouteObject> = [
	{
		element: <Layout />, //导航
		children: [
			{
				path: "/game",
				element: lazyLoad(React.lazy(() => import("@/views/game/index"))),
				meta: {
					title: "game-index",
					isRoot: false,
				},
			},
		],
	},
];

export default ArrsRouter;
