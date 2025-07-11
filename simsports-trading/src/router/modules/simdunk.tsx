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
				path: "/simdunk",
				element: lazyLoad(React.lazy(() => import("@/views/simdunk/index"))),
				meta: {
					title: "simdunk-index",
					isRoot: false,
				},
				children: [
					{
						path: "/simdunk/overview",
						element: lazyLoad(React.lazy(() => import("@/views/simdunk/overview/index"))),
						meta: {
							title: "simdunk-overview",
							isRoot: false,
						},
					},
					{
						path: "/simdunk/collections",
						element: lazyLoad(React.lazy(() => import("@/views/simdunk/collections/index"))),
						meta: {
							title: "simdunk-collections",
							isRoot: false,
						},
					},
					{
						path: "/simdunk/cast",
						element: lazyLoad(React.lazy(() => import("@/views/simdunk/cast/index"))),
						meta: {
							title: "simdunk-cast",
							isRoot: false,
						},
					},
				],
			},
		],
	},
];

export default arrsRouter;
