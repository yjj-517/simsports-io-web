// faucets路由
import React from "react";
import { Navigate } from "react-router-dom";
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
				path: "/faucets",
				element: <Navigate to="/faucets/mantle-sepolia" />,
			},
			{
				path: "/faucets/mantle-sepolia",
				element: lazyLoad(React.lazy(() => import("@/views/faucets/mantle-sepolia/index"))),
				meta: {
					title: "mantle-sepolia",
					isRoot: false,
				},
			},
			// {
			// 	path: "/faucets/arbitrum-sepolia",
			// 	element: lazyLoad(React.lazy(() => import("@/views/faucets/arbitrum-sepolia/index"))),
			// 	meta: {
			// 		title: "arbitrum-sepolia",
			// 		isRoot: false,
			// 	},
			// },
		],
	},
];

export default arrsRouter;
