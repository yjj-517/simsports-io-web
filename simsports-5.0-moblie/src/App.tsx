import React from "react";

//router
import { BrowserRouter } from "react-router-dom";
import Router from "@/router/index";
// 英文配置
import { ConfigProvider } from "antd-mobile";
import enUS from "antd-mobile/es/locales/en-US";
const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<ConfigProvider locale={enUS}>
					<Router />
				</ConfigProvider>
			</BrowserRouter>
		</>
	);
};

export default React.memo(App);
