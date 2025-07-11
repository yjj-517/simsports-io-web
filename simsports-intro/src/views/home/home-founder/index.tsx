// <!-- home-founder -->
import React, { useState } from "react";

import HomeTitle from "@/components/home-title/index"; //title
import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import BgImg from "@/assets/imgs/home/founder/bg-img.png";
import BgColor from "@/assets/imgs/common/bg-color.png";
import Title01 from "@/assets/imgs/home/founder/title-01.png";
import Title02 from "@/assets/imgs/home/founder/title-02.png";

const View: React.FC = () => {
	// title
	const [titleData] = useState({
		serial: "06",
		name01: "",
		name02: "FOUNDER",
		text: "Angel round funded by Fine Vision. Jin - Founder | Chief Producer.​",
	});
	// founder
	const [founderData] = useState([
		{
			titleArr: ["15", "YEARS +"],
			text: "With over 15 years of working experience in the game industry",
		},
		{
			titleArr: ["TOP 4 GAME", "COMPANITES"],
			text: "Served in multiple leadership positions at Meitu, 4399 Games, Forgame Yunyou Holdings, and LMD",
		},
		{
			titleArr: ["ONE BILLION", "DOLLARS"],
			text: "The cumulative revenue of the game projects led in the past was approximately $1 billion",
		},
	]);

	return (
		<>
			<div id="home-founder" className="relative w-full h-full overflow-hidden">
				{/* BG-IMG */}
				<HomeBgimg Imgsrc={BgImg} ImgHeight="1500px" />
				<div className="bg-stripes absolute w-full h-full "></div>
				<section className="main py-[80px]">
					{/* title */}
					<HomeTitle TitleData={titleData} Align={false} />
					<div className="mt-10 relative h-[220px] w-full flex justify-center items-center">
						<div className="absolute h-full w-full">
							<img src={BgColor} className=" h-full w-full object-fill " />
						</div>
						<div className="w-full h-full relative flex justify-center items-center flex-col gap-6 lg:gap-10 lg:flex-row">
							<img
								src={Title01}
								className="h-[40px] md:h-[50px] lg:h-[60px] w-auto  object-cover"
							/>
							<img
								src={Title02}
								className="h-[40px] md:h-[50px] lg:h-[60px] w-auto  object-cover"
							/>
						</div>
					</div>
					<div className="bg-linear-to-br from-primary to-regular pt-[80px] pb-[60px] px-[50px] flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-0  ">
						{founderData.map((item, index) => (
							<div key={index} className="flex justify-between items-center">
								<div className="text-center font-semibold">
									{item.titleArr.map((t, i) => (
										<div key={i} className=" text-4xl md:text-5xl">
											{t}
										</div>
									))}
									<p className="text-lg mt-3 max-w-[440px]">{item.text}</p>
								</div>
								{index < founderData.length - 1 && (
									<span className="hidden lg:flex h-[160px] min-w-px bg-white/50 mx-[50px]"></span>
								)}
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
