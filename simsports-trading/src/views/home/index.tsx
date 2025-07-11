// home
import React from "react";
import HomeTop from "./home-top/index.tsx";
import HomeEvens from "./home-events/index.tsx";
import HomeShow from "./home-show/index.tsx";
// import HomeMore from "./home-more/index.tsx";
const View: React.FC = () => {
	return (
		<>
			<HomeTop />
			<HomeEvens />
			<HomeShow />
			{/* <HomeMore /> */}
			<div className="pt-20"></div>
		</>
	);
};

export default View;
