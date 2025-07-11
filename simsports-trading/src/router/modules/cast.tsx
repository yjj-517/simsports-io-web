// cast路由
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
			// {
			// 	path: "/cast",
			// 	element: lazyLoad(React.lazy(() => import("@/views/cast/home/index"))),
			// 	meta: {
			// 		title: "cast-index",
			// 		isRoot: false,
			// 	},
			// },
			{
				path: "/cast/energy-tuner-r",
				element: lazyLoad(React.lazy(() => import("@/views/cast/cast-view/index"))),
				meta: {
					title: "simdunk-overview",
					isRoot: false,
				},
			},
		],
	},
];

export default arrsRouter;
