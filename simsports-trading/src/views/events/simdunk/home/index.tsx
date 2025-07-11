// events
import React from "react";
import HomeTop from "./home-top/index.tsx";
import HomeEvents from "./home-events/index.tsx";

const View: React.FC = () => {
	return (
		<>
			<HomeTop />
			<HomeEvents />
			<div className="pt-40"></div>
		</>
	);
};

export default View;
