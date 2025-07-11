// HOME
import React from "react";
import HomeTop from "./home-top/index";
import HomeGame from "./home-game/index";
import HomeBuild from "./home-build/index";
import HomeGovernance from "./home-governance/index";
import HomePartners from "./home-partners/index";
import HomeTeam from "./home-team/index";
import DownloadGame from "@/components/download-game/index";

const View: React.FC = () => {
	return (
		<>
			<HomeTop />
			<HomeGame />
			<HomeBuild />
			<HomeGovernance />
			<HomePartners />
			<HomeTeam />
			<DownloadGame />
		</>
	);
};

export default View;
