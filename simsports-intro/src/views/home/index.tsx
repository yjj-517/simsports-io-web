// <!-- home -->
import React from "react";

import PartnersView from "@/components/partners-view/index";
import HomeTop from "./home-top/index";
import HomeSimsports from "./home-simsports/index";
import HomeSimdunk from "./home-simdunk/index";
import HomeA3a from "./home-a3a/index";
import HomeRoadmap from "./home-roadmap/index";
import HomeAssets from "./home-assets/index";
import HomeCore from "./home-core/index";
import HomePlayer from "./home-player/index";
import HomeFounder from "./home-founder/index";

const View: React.FC = () => {
	return (
		<>
			<HomeTop />
			<HomeSimsports />
			<PartnersView AlignState={true} />
			<HomeSimdunk />
			<PartnersView />
			<HomePlayer />
			<PartnersView />
			<HomeA3a />
			<PartnersView AlignState={true} />
			<HomeRoadmap />
			<HomeAssets />
			<HomeCore />
			<PartnersView />
			<HomeFounder />
			<PartnersView AlignState={true} />
		</>
	);
};

export default View;
