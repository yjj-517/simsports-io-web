import React from "react";

import "./styles/index.css"; //styles
//router
import { BrowserRouter } from "react-router-dom";
import Router from "@/router/index";

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default React.memo(App);
