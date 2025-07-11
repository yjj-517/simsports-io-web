// lgoin
import React from "react";

import LoginView from "./login-view/index";

import BgLogin from "@/assets/imgs/login/bg-login.svg?react";
import LoginImg from "@/assets/imgs/login/login-img.png";

import { Flex } from "antd"; //antd

const View: React.FC = () => {
	return (
		<Flex justify={"center"} align={"center"} className="w-full h-screen relative">
			<BgLogin className="absolute inset-0 h-full w-full object-cover object-center" />
			<Flex justify={"center"} align={"center"} className="w-[90%] h-[90%] relative">
				<div className="w-[50%] hidden md:flex">
					<img src={LoginImg} />
				</div>
				<LoginView />
			</Flex>
		</Flex>
	);
};

export default View;
