// home-top
import React from "react";
import simdunkEventsBg from "@/assets/imgs/events/simdunk/simdunk-events-bg.png";
import simdunkLogo from "@/assets/imgs/logo/simdunk-logo.png";
const View: React.FC = () => {
	return (
		<>
			<div className="relative h-[360px] overflow-hidden bg-black">
				<div className="w-[1920px] absolute left-2/4 translate-x-[-50%]">
					<img src={simdunkEventsBg} className="h-[360px]" />
				</div>
				<section className="main">
					<div className="absolute bottom-10">
						<img src={simdunkLogo} className="w-[106px]" />
						<h2 className="mt-4 text-2xl">SimDunk</h2>
						<p className="mt-2 text-text-200 max-w-[530px]">
							3v3 real-time street basketball with NFT characters in a virtual world. Earn $Dunk tokens, level up, join esports
							events, and trade NFTs for profits.
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
