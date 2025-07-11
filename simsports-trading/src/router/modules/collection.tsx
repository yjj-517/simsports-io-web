// collection路由
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
				// path: "/collection/:param1/:param2",
				path: "/collection/:param1/",
				element: lazyLoad(React.lazy(() => import("@/views/collection/collection-contract/index"))),
				meta: {
					title: "collection-index",
					isRoot: false,
				},
			},
			{
				// path: "/collection/:param1/:param2",
				path: "/collection/:param1/:param2",
				element: lazyLoad(React.lazy(() => import("@/views/collection/collection-item-card/index"))),
				meta: {
					title: "collection-index",
					isRoot: false,
				},
			},
		],
	},
];

export default arrsRouter;
