// 404
import React from "react";
import "./index.less";
import exceptionImg from "@/assets/imgs/exception/exception.svg";
import { Image } from "antd-mobile";

const View: React.FC = () => {
	return (
		<>
			<div className="exception-box">
				<Image src={exceptionImg} className="exception-img" />
				<p className="fillet-paragraph-text02">The page you are looking for doesn’t exist or another error occurred</p>
			</div>
		</>
	);
};

export default View;
