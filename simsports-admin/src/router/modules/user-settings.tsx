// usersetting路由
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
				path: "/user-settings/avatar",
				element: lazyLoad(React.lazy(() => import("@/views/user-settings/avatar/home/index"))),
				meta: {
					title: "user-settings-avatar",
					isRoot: true,
				},
			},
			{
				path: "/user-settings/avatar/:id",
				element: lazyLoad(
					React.lazy(() => import("@/views/user-settings/avatar/setting-avatar/index")),
				),
				meta: {
					title: "user-settings-avatar-setting",
					isRoot: true,
				},
			},
		],
	},
];

export default arrsRouter;
