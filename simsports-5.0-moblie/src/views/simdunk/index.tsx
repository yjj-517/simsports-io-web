// simdunk
import React from "react";
import SimdunkCarousel from "./simdunk-carousel/index";
import SimdunkIntroduce from "./simdunk-introduce/index";
// import SimdunkPalyer from "./simdunk-palyer/index";
import SimdunkPalyerMenu from "./simdunk-palyer-menu/index";
import SimdunkEarn from "./simdunk-earn/index";

const View: React.FC = () => {
	return (
		<>
			<SimdunkCarousel />
			<SimdunkIntroduce />
			{/* <SimdunkPalyer /> */}
			<SimdunkPalyerMenu />
			<SimdunkEarn />
		</>
	);
};

export default View;
