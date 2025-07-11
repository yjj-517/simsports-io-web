// <!-- home-assets -->
import React, { useState } from "react";

import HomeTitle from "@/components/home-title/index"; //title
import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import BgImg from "@/assets/imgs/home/top/bg-img.png";
import AssetsImg from "@/assets/imgs/home/assets/assets-img.png";

const View: React.FC = () => {
	// title
	const [titleData] = useState({
		serial: "05",
		name01: "TOKEN",
		name02: "ECONOMY",
		text: "",
	});
	return (
		<div id="home-assets" className="relative w-full h-full overflow-hidden">
			{/* BG-IMG */}
			<HomeBgimg Imgsrc={BgImg} ImgHeight="2000px" />
			<section className="main py-[80px]">
				{/* title */}
				<HomeTitle TitleData={titleData} Align={true} />
				<div className="trove-scrollbar">
					<img src={AssetsImg} className="w-full h-auto object-cover min-w-[800px] py-3" />
				</div>
			</section>
		</div>
	);
};

export default View;
