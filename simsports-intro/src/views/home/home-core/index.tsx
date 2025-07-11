// <!-- home-core -->
import React, { useState, useEffect, useRef } from "react";

import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import BgImg from "@/assets/imgs/home/core/bg-img.png";
import TitleImg from "@/assets/imgs/home/core/title-img.png";
import List01 from "@/assets/imgs/home/core/list01.png";
import List011 from "@/assets/imgs/home/core/list011.png";
import List012 from "@/assets/imgs/home/core/list012.png";
import List02 from "@/assets/imgs/home/core/list02.png";
import List021 from "@/assets/imgs/home/core/list021.png";
import List022 from "@/assets/imgs/home/core/list022.png";
import List03 from "@/assets/imgs/home/core/list03.png";
import List031 from "@/assets/imgs/home/core/list031.png";
import List032 from "@/assets/imgs/home/core/list032.png";

const View: React.FC = () => {
	// core-list
	const [coreData] = useState<any[]>([
		{
			title: "S-LEVEL",
			name: "SIM STREET",
			text: "Business license across all games on the SimSports platform. Besides obtaining extraordinary in-game practical functions in all games on the platform, asset holders can also enjoy the rights and interests of sharing part of the profits in the games.",
			img: List01,
			list: [
				{
					icon: List011,
					name: "Platform-Level Practical Functions",
				},
				{
					icon: List012,
					name: "Profit Sharing",
				},
			],
		},
		{
			title: "A-LEVEL",
			name: "BRAVO-D",
			text: "It is a voucher generated through the game behaviors and operational activities in SimDunk, which is used to exchange for the future platform token $BRAVO.",
			img: List02,
			list: [
				{
					icon: List021,
					name: "Rights and Interests of Platform Token Allocation",
				},
				{
					icon: List022,
					name: "The Ultimate Value Carrier of the Platform",
				},
			],
		},
		{
			title: "B-LEVEL",
			name: "SURGE COMMAND",
			text: "It is a blind box from SimDunk's core asset 'Superstar Player' (NFT Player) ,can open a superstar player of at least rare level.",
			img: List03,
			list: [
				{
					icon: List031,
					name: "Limited release. Essential for gold-hunting",
				},
				{
					icon: List032,
					name: "There is broad room for appreciation",
				},
			],
		},
	]);
	// 动画title从1->0
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				root: null,
				threshold: 0.4, // 组件中心 % 可见时触发
			},
		);
		if (ref.current) observer.observe(ref.current);
		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);
	return (
		<div className="relative w-full h-full overflow-hidden">
			{/* BG-IMG */}
			<HomeBgimg Imgsrc={BgImg} ImgHeight="1480px" />
			<div className="bg-stripes absolute w-full h-full "></div>
			<section className="main pb-[80px]">
				{/* title */}
				<div className="flex justify-center items-center">
					<img src={TitleImg} className="min-w-[600px] w-full h-auto object-cover" />
				</div>
				<div className="trove-scrollbar h-full" ref={ref}>
					<div className="pt-24 pb-10 flex justify-between items-center gap-10 ">
						{coreData.map((item, index) => (
							<div
								key={index}
								className="p-7 w-[400px] h-[800px] bg-linear-to-b from-primary to-regular flex flex-col items-center"
								style={{
									opacity: isVisible ? 1 : 0,
									transition: `opacity ${0.5 + index * 0.5}s ease`,
								}}
							>
								<p className="font-bold text-[60px] mt-[-80px]">{item.title}</p>
								<img src={item.img} className="w-full h-auto object-cover" />
								<p className="mt-4 text-4xl font-bold">{item.name}</p>
								<p className="mt-4 text-lg text-center text-white/80 min-h-[160px]">{item.text}</p>
								<div className="mt-2 flex flex-col items-center gap-5 ">
									{item.list.map((t: any, i: React.Key | null | undefined) => (
										<div
											key={i}
											className=" w-[280px] bg-bgcolor-400 py-1.5 px-3.5 flex items-center gap-3.5 drop-shadow-[2px_4px_0px_#BB00FF] cursor-pointer group"
										>
											<img
												src={t.icon}
												className="w-[42px] h-auto object-cover group-hover:scale-125 transition-transform duration-[400ms]"
											/>
											<p className="text-xl leading-none">{t.name}</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default View;
