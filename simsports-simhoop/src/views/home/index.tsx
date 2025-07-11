// HOME
import React from "react";

import HomeTop from "./home-top/index";
import HomeIntroduce from "./home-introduce/index";
import HomePlayer from "./home-player/index";
import HomeGameplay from "./home-gameplay/index";
import HomeTeam from "./home-team/index";

const View: React.FC = () => {
	return (
		<>
			<HomeTop />
			<HomeIntroduce />
			<HomePlayer />
			<HomeGameplay />
			<HomeTeam />
		</>
	);
};

export default View;
