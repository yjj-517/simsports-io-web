// admin-view
import React from "react";
import { useNavigate } from "react-router-dom"; //router

import { accountStores } from "@/store/index"; //store

import SimsportsLogoIcon from "@/assets/imgs/logo/simsports-logo-icon.svg?react";

import { Dropdown, Avatar, Flex } from "antd"; //antd
import type { MenuProps } from "antd"; //antd

const View: React.FC = () => {
	const navigate = useNavigate();
	const { userInfo, delUser } = accountStores.getState(); //account

	// 退出登录
	const logout = () => {
		delUser();
		navigate("/login");
	};
	const items: MenuProps["items"] = [
		{
			label: "Name: " + userInfo.nickname,
			key: "1",
			disabled: true,
		},
		{
			type: "divider",
		},
		{
			label: "Logout",
			key: "2",
			onClick: logout,
		},
	];

	return (
		<Flex justify={"center"} align={"center"} className="mr-10">
			<Dropdown menu={{ items }} placement="bottomRight" arrow trigger={["click"]}>
				<Avatar
					size={40}
					icon={<SimsportsLogoIcon className="w-full h-auto object-cover " />}
					className="text-primary bg-white shadow-md"
				/>
			</Dropdown>
		</Flex>
	);
};

export default View;
