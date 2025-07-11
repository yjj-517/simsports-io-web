// download路由
import React from "react";
// loading提示的加载组件
import lazyLoad from "@/router/utils/lazy-load";
// 导航路由组件
// import Layout from "@/layout/layout-home/index";
import { RouteObject } from "@/router/interface";

const ArrsRouter: Array<RouteObject> = [
	{
		// element: <Layout />, //导航
		children: [
			{
				path: "/download",
				element: lazyLoad(React.lazy(() => import("@/views/download/index"))),
				meta: {
					title: "download-index",
					isRoot: false,
				},
			},
		],
	},
];

export default ArrsRouter;
