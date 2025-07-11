import React from "react";
// loading提示的加载组件
import lazyLoad from "@/router/utils/lazy-load";
// 导航路由组件
import Layout from "@/views/layout/index";
import { RouteObject } from "@/router/interface";
// game路由
const arrsRouter: Array<RouteObject> = [
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
			{
				path: "/game/simdunk",
				element: lazyLoad(React.lazy(() => import("@/views/simdunk/index"))),
				meta: {
					title: "game-simdunk",
					isRoot: false,
				},
			},
		],
	},
];

export default arrsRouter;
