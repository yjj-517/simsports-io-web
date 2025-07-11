// information路由
import React from "react";
// loading提示的加载组件
import lazyLoad from "@/router/utils/lazy-load";
// 导航路由组件
// import Layout from "@/layout/home-layout/index";
import { RouteObject } from "@/router/interface";

const arrsRouter: Array<RouteObject> = [
	{
		// element: <Layout />, //导航
		children: [
			{
				path: "/privacy-policy",
				element: lazyLoad(React.lazy(() => import("@/views/information/privacy-policy/index"))),
				meta: {
					title: "privacy-policy",
					isRoot: false,
				},
			},
			{
				path: "/terms-of-use",
				element: lazyLoad(React.lazy(() => import("@/views/information/terms-of-use/index"))),
				meta: {
					title: "terms-of-use",
					isRoot: false,
				},
			},
		],
	},
];

export default arrsRouter;
