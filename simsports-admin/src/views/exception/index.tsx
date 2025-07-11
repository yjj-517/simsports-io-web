import React from "react";
import { useNavigate } from "react-router-dom"; //router

import { Button, Result, Flex } from "antd"; //antd

const View: React.FC = () => {
	const navigate = useNavigate(); //router

	return (
		<Flex justify={"center"} align={"center"} className="w-full h-screen">
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button
						type="primary"
						onClick={() => {
							navigate("/");
						}}
					>
						Back Home
					</Button>
				}
			/>
		</Flex>
	);
};

export default View;
