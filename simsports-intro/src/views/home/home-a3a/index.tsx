// <!-- home-a3a -->
import React, { useState } from "react";

import HomeTitle from "@/components/home-title/index"; //title
import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import BgImg from "@/assets/imgs/home/a3a/bg-img.png";

const View: React.FC = () => {
	// title
	const [titleData] = useState({
		serial: "03",
		name01: "ALL-STAR",
		name02: "3-POINT APEX",
		text: "",
	});
	// a3a-text
	const [textData] = useState([
		"	All-Star 3-Point Apex (A3A) is a casual basketball mini-game that gathers all-star players. It combines QTE three-point shooting and idle RPG elements for character development.",
		"The game has created a multi-dimensional universe of basketball, bringing together	legendary superstars in reality and passionate basketball players in anime, breaking	through the barriers of different dimensions and competing on the same stage. Players	will develop characters, continuously enhance their strength, gradually compete on the	peak of basketball courts and unlock Web3 airdrop rewards. Start a unique basketball journey!",
	]);
	return (
		<>
			<div id="home-a3a" className="relative w-full h-full overflow-hidden">
				{/* BG-IMG */}
				<HomeBgimg Imgsrc={BgImg} ImgHeight="1490px" />
				<section className="main py-[80px]">
					{/* title */}
					<HomeTitle TitleData={titleData} Align={true} />
					<div className="mt-10 max-w-[800px] flex flex-col gap-8">
						{textData.map((item, index) => (
							<p key={index} className="text-base md:text-2xl text-white/80">
								{item}
							</p>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
