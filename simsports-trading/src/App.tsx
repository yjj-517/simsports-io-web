import React, { useEffect } from "react";
import { osStores } from "@/store/index"; //store

import "./styles/index.css"; //styles
//router
import { BrowserRouter } from "react-router-dom";
import Router from "@/router/index";
import AuthRouter from "@/router/utils/auth-router";
// antd配置
import { ConfigProvider } from "antd";
import enGB from "antd/locale/en_GB";

const App: React.FC = () => {
	const { setOs } = osStores(); //layout
	// 监听设备
	const os = () => {
		const userAgent = navigator.userAgent;
		const mobilePattern =
			/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|android|iphone|ipod|ipad|iPad|Tablet|Kindle|Nexus/i;
		const isMobile = mobilePattern.test(userAgent);
		if (isMobile) {
			setOs("isMobile");
		} else {
			setOs("isPc");
		}
	};
	useEffect(() => {
		os();
	}, []);

	return (
		<>
			<BrowserRouter>
				<ConfigProvider locale={enGB}>
					<AuthRouter>
						<Router />
					</AuthRouter>
				</ConfigProvider>
			</BrowserRouter>
		</>
	);
};

export default React.memo(App);
