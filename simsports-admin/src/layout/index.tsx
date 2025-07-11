import React, { useState } from "react";
import { Outlet } from "react-router-dom"; //router

import MenuView from "./menu-view/index";
import HeaderView from "./header-view/index";

import { Layout } from "antd"; //antd
const { Sider, Content } = Layout;

const View: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	// 修改弹窗状态
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout className="w-full h-screen">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<MenuView collapsed={collapsed} />
			</Sider>
			<Layout>
				<HeaderView collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
				<Content className="m-2 p-4 rounded-lg trove-scrollbar box-border bg-white">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default View;
