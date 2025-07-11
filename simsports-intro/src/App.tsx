import React from "react";
//router
import { BrowserRouter } from "react-router-dom"; //router
import Router from "@/router/index"; //router
// import AuthRouter from "@/router/utils/auth-router"; //router

// slick-轮播图
import "slick-carousel/slick/slick.css"; // slick
import "slick-carousel/slick/slick-theme.css"; // slick

const App: React.FC = () => {
	return (
		<BrowserRouter>
			{/* <AuthRouter> */}
			<Router />
			{/* </AuthRouter> */}
		</BrowserRouter>
	);
};

export default React.memo(App);
