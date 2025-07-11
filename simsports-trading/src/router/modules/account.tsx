// user路由
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
				path: "/account",
				element: lazyLoad(React.lazy(() => import("@/views/account/index"))),
				meta: {
					title: "account-index",
					isRoot: true,
				},
				children: [
					{
						path: "/account/collections",
						element: lazyLoad(React.lazy(() => import("@/views/account/collections/index"))),
						meta: {
							title: "simdunk-collections",
							isRoot: true,
						},
					},
				],
			},
		],
	},
];

export default arrsRouter;
