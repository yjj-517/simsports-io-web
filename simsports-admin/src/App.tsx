import React from "react";

import { BrowserRouter } from "react-router-dom"; //router
import Router from "@/router/index"; //router
import AuthRouter from "@/router/utils/auth-router"; //router

// antd-配置
import { ConfigProvider } from "antd";
import enGB from "antd/locale/en_GB";

const App: React.FC = () => {
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
