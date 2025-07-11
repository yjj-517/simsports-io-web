// login路由
import React from "react";
// loading提示的加载组件
import lazyLoad from "@/router/utils/lazy-load";
// 导航路由组件
// import Layout from "@/layout/index";
import { RouteObject } from "@/router/interface";

const arrsRouter: Array<RouteObject> = [
	{
		path: "/login",
		element: lazyLoad(React.lazy(() => import("@/views/login/index"))),
		meta: {
			title: "login-index",
			isRoot: false,
		},
	},
];

export default arrsRouter;
