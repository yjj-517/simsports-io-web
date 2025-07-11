import React from "react";
import "./app.less";
//router
import { BrowserRouter } from "react-router-dom";
import Router from "@/router/index";
// 英文配置
import enGB from "antd/locale/en_GB";
import { ConfigProvider } from "antd";
const App: React.FC = () => {
	return (
		<>
			<div id="app">
				<BrowserRouter>
					<ConfigProvider locale={enGB}>
						<Router />
					</ConfigProvider>
				</BrowserRouter>
			</div>
		</>
	);
};

export default React.memo(App);
