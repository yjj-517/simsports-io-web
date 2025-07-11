// <!-- Home-Simsports -->
import React, { useState } from "react";

import HomeTitle from "@/components/home-title/index"; //title
import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import BgImg from "@/assets/imgs/home/simsports/bg-img.png";
import Simsports01 from "@/assets/imgs/home/simsports/simsports-01.png";
import Simsports02 from "@/assets/imgs/home/simsports/simsports-02.png";
import Simsports03 from "@/assets/imgs/home/simsports/simsports-03.png";
import Simsports04 from "@/assets/imgs/home/simsports/simsports-04.png";
const View: React.FC = () => {
	// title
	const [titleData] = useState({
		serial: "01",
		name01: "INTRO",
		name02: "SIMSPORTS",
		text: "SimSports focuses on developing and operating Web3 sports games, creating an all-encompassing platform that integrates player communities, advanced AI technology, a variety of games, esports events, and IP incubation.",
	});
	// list
	const [simsportsList] = useState([
		{
			title: "SIMDUNK",
			text: "Pushing the Boundaries of Web3 Sports Gaming.",
			imgUrl: Simsports01,
		},
		{
			title: "ALL-STAR 3-POINT APEX",
			text: "A casual basketball mini-game with all-stars.",
			imgUrl: Simsports02,
		},
		{
			title: "SIMFISHING",
			text: "A fun Web3 fishing game.(Coming Soon)",
			imgUrl: Simsports03,
		},
		{
			title: "SIMSOCCER",
			text: "An innovative Web3 soccer game.(Coming Soon)",
			imgUrl: Simsports04,
		},
	]);
	return (
		<>
			<div id="home-simsports" className="relative w-full h-full overflow-hidden">
				{/* BG-IMG */}
				<HomeBgimg Imgsrc={BgImg} ImgHeight="1350px" />
				<section className="main py-[80px]">
					{/* title */}
					<HomeTitle TitleData={titleData} Align={true} />
					{/* games */}
					<div className="mt-14 flex justify-center items-center gap-3 flex-wrap">
						{simsportsList.map((item, index) => (
							<div
								key={index}
								className="cursor-pointer w-[320px] h-auto p-3 flex gap-1.5 bg-bgcolor-300 hover:translate-y-[-10px] transition-transform duration-[400ms]"
							>
								<img src={item.imgUrl} className="w-[144px] h-auto object-cover" />
								<div className="flex flex-col">
									<p className="text-2xl">{item.title}</p>
									<p className="text-white/80">{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
