import React from "react";

import CollapsedView from "./collapsed-view/index";
import AdminView from "./admin-view/index";
import BreadcrumbView from "./breadcrumb-view/index";

import { Layout, theme, Flex } from "antd"; //antd
const { Header } = Layout;

interface ViewProps {
	collapsed: boolean;
	toggleCollapsed: () => void;
}

const View: React.FC<ViewProps> = ({ collapsed, toggleCollapsed }: ViewProps) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Header
			style={{ background: colorBgContainer }}
			className="flex justify-between items-center px-4"
		>
			<Flex justify={"space-between"} align={"center"}>
				<CollapsedView collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
				<BreadcrumbView />
			</Flex>
			<Flex align={"center"}>
				<AdminView />
			</Flex>
		</Header>
	);
};

export default View;
