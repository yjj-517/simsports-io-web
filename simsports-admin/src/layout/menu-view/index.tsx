// menu-view
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; //router

import { findParentKey } from "./menu";

import SimsportsLogoIcon from "@/assets/imgs/logo/simsports-logo-icon.svg?react";
import SimsportsLogoText from "@/assets/imgs/logo/simsports-logo-text.svg?react";

// menu
import { Menu } from "antd"; //antd
import { HomeOutlined, UserOutlined, SettingOutlined, AlignLeftOutlined } from "@ant-design/icons"; //antd
import type { MenuProps } from "antd"; //antd

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
	{ key: "/home", label: "Home", icon: <HomeOutlined /> },
	{ key: "/userinfo", label: "Userinfo", icon: <UserOutlined /> },
	{
		key: "/user-settings",
		label: "User-Settings",
		icon: <AlignLeftOutlined />,
		children: [{ key: "/user-settings/avatar", label: "Avatar" }],
	},
	{
		key: "/simdunk",
		label: "Simdunk",
		icon: <AlignLeftOutlined />,
		children: [{ key: "/simdunk/simdunk-player", label: "Simdunk-Player" }],
	},
	{
		key: "/setting",
		icon: <SettingOutlined />,
		label: "Setting",
		children: [{ key: "/setting/swiper", label: "Swiper" }],
	},
];

interface ViewProps {
	collapsed: boolean;
}

const View: React.FC<ViewProps> = ({ collapsed }: ViewProps) => {
	const navigate = useNavigate(); //router
	const { pathname } = useLocation(); //router

	const [openKeys, setOpenKeys] = useState<string[]>([]); //open-menu
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]); //menu-高亮

	useEffect(() => {
		// 刷新页面菜单保持高亮
		setSelectedKeys([pathname]);
		// 刷新页面菜单保持打开状态
		const parentKey = findParentKey(menuItems, pathname);
		if (!collapsed) {
			setOpenKeys(parentKey ? parentKey : []);
		}
	}, [pathname, collapsed]);
	// 设置当前展开的 subMenu
	const onOpenChange = (openKeys: string[]) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};
	// 菜单的点击事件
	const onMenuClick: MenuProps["onClick"] = e => {
		navigate(e.key);
	};

	return (
		<div className="w-full h-full text-white flex flex-col ">
			{/* logo */}
			<div
				className="h-[64px] flex justify-center items-center gap-1 text-primary"
				onClick={() => {
					navigate("/");
				}}
			>
				<SimsportsLogoIcon />
				{!collapsed && <SimsportsLogoText />}
			</div>
			{/* menu */}
			<div className="trove-scrollbar flex-1">
				<Menu
					theme="dark"
					mode="inline"
					triggerSubMenuAction="click"
					selectedKeys={selectedKeys}
					openKeys={openKeys}
					items={menuItems}
					onClick={onMenuClick}
					onOpenChange={onOpenChange}
				></Menu>
			</div>
		</div>
	);
};

export default View;
