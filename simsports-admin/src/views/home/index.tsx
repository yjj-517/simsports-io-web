// home
import React from "react";

import HomeWelcome from "@/assets/imgs/home/home-welcome.png";

import { Flex } from "antd"; //antd

const View: React.FC = () => {
	return (
		<Flex justify={"center"} align={"center"} className="w-full h-full">
			<img src={HomeWelcome} className="w-[80%] h-auto object-cover" />
		</Flex>
	);
};

export default View;
