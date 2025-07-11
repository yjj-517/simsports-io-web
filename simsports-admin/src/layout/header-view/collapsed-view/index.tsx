// collapsed-view
import React from "react";

import { Button } from "antd"; //antd
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"; //antd

interface ViewProps {
	collapsed: boolean;
	toggleCollapsed: () => void;
}

const View: React.FC<ViewProps> = ({ collapsed, toggleCollapsed }: ViewProps) => {
	return (
		<Button
			type="text"
			icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			onClick={() => toggleCollapsed()}
			style={{
				fontSize: "16px",
				width: 64,
				height: 64,
			}}
		/>
	);
};

export default View;
